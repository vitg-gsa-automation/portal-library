import { InputError, InputHints } from '../Input';
import clsx from 'clsx';

import styles from './index.module.scss';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hints?: string;
  error?: string;
}

export function TextArea({ name, hints, error, ...props }: TextAreaProps) {
  return (
    <div className={styles.root}>
      <textarea
        className={clsx(styles.textarea, error && styles['textarea--error'])}
        id={name}
        autoComplete="off"
        spellCheck={false}
        rows={4}
        {...props}
      />
      {hints && <InputHints text={hints} />}
      {error && <InputError error={error} />}
    </div>
  );
}
