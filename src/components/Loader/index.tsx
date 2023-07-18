import { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderSizeProps } from 'react-spinners/helpers/props';

import styles from './index.module.scss';

type LoaderColor = 'primary' | 'black' | 'white';

interface LoaderProps extends LoaderSizeProps {
  borderWidth?: number;
  loaderColor?: LoaderColor;
  size?: number;
}

function getColor(color: LoaderColor): string {
  switch (color) {
    case 'primary':
      return '#5f6b7a';
    case 'black':
      return '#000000';
    case 'white':
      return '#fff';
  }
}

export function Loader({
  loaderColor = 'primary',
  borderWidth = 3,
  size = 25,
  ...props
}: LoaderProps) {
  const override: CSSProperties = {
    borderWidth: `${borderWidth}px`,
  };

  return (
    <ClipLoader
      loading
      cssOverride={override}
      color={getColor(loaderColor)}
      size={size}
      speedMultiplier={1.25}
      {...props}
    />
  );
}

export function LoaderPage() {
  return (
    <div className={styles.page}>
      <Loader />
    </div>
  );
}
