import * as ProgressPrimitive from '@radix-ui/react-progress';

import styles from './index.module.scss';

interface ProgressProps {
  progress?: number;
  indicatorColor?: string;
}

export function Progress({ progress = 0, indicatorColor }: ProgressProps) {
  return (
    <ProgressPrimitive.Root className={styles.root} value={progress}>
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{
          transform: `translateX(-${100 - progress}%)`,
          backgroundColor: indicatorColor,
        }}
      />
      <div
        className={styles.label}
        style={{ color: progress < 50 ? 'black' : undefined }}
      >{`${progress.toFixed(0)}%`}</div>
    </ProgressPrimitive.Root>
  );
}
