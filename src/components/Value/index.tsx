import { ReactNode } from 'react';
import MaterialIcon from '../MaterialIcon';

import styles from './index.module.scss';

interface Props {
  copyable?: boolean;
  children?: ReactNode;
}

function Value({ copyable, children }: Props) {
  return (
    <div className={styles.root}>
      {copyable && (
        <MaterialIcon
          icon="content_copy"
          className={styles.icon}
          fontSize="1.6rem"
          onClick={async () => {
            await navigator.clipboard.writeText(String(children));
          }}
        />
      )}
      {children}
    </div>
  );
}
export default Value;
