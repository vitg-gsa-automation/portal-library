import clsx from 'clsx';

import styles from './index.module.scss';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function TextArea({ name, invalid, ...props }: TextAreaProps) {
  return (
    <div className={styles.root}>
      <textarea
        className={clsx(styles.textarea, {
          [styles.invalid]: invalid,
        })}
        id={name}
        autoComplete="off"
        spellCheck={false}
        rows={4}
        {...props}
      />
    </div>
  );
}
