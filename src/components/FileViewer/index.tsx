import 'highlight.js/styles/default.css';

import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';

import styles from './index.module.scss';

// Register languages
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

export interface FileViewerProps {
  language: string;
  content: string;
}

export function FileViewer({ language, content }: FileViewerProps) {
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [content]);

  return (
    <div className={styles.root}>
      <pre>
        <code ref={codeRef} className={language}>
          {content}
        </code>
      </pre>
    </div>
  );
}
