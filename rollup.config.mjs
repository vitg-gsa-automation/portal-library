import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

import packageJson from './package.json' assert { type: 'json' };

function getFolderName(filePath) {
  const folderPath = path.dirname(filePath);
  return path.basename(folderPath);
}

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'react-router-dom'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        modules: {
          generateScopedName: (name, filename, css) => {
            const folderName = getFolderName(filename);
            const hash = Buffer.from(`${folderName}_${name}_${css}`)
              .toString('base64')
              .slice(0, 5);
            return `vitg_${folderName}_${name}__${hash}`;
          },
          // generateScopedName: 'vitg_[name]_[local]__[hash:base64:5]',
        },
        use: ['sass'],
        extensions: ['.scss'],
        namedExports: true,
      }),
      json(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        outDir: 'dist',
        rootDir: 'src',
        exclude: [
          '**/stories',
          '**/*.stories.tsx',
          '**/*.test.tsx',
          '**/*.test.ts',
        ],
      }),
      terser(),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
