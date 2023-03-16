import { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';
import MaterialIcon from '../MaterialIcon';

type MessageType = 'info' | 'error';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type?: MessageType;
  text: ReactNode;
  icon?: string;
}

interface MessageListProps {
  text?: string;
  list: any[];
}

function Message({ type = 'info', text, icon, ...props }: Props) {
  return (
    <div className={clsx(styles.root, styles[type])} {...props}>
      {icon && (
        <MaterialIcon icon={icon} className={styles.icon} fontSize="2rem" />
      )}
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export function MessageList({ text, list }: MessageListProps) {
  return (
    <div className={styles['message-list']}>
      {text && <span className={styles['message-list__text']}>{text}</span>}
      <ul className={styles['message-list__list']}>
        {list.map((str, index) => (
          <li key={index} className={styles['message-list__list__item']}>
            {str}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Message;
