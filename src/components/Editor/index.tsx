import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';
import { search } from '@codemirror/search';
import CodeMirror, {
  ReactCodeMirrorProps,
  ReactCodeMirrorRef,
} from '@uiw/react-codemirror';
import { useRef } from 'react';

import styles from './index.module.scss';

export interface EditorProps extends ReactCodeMirrorProps {}

export function Editor({ ...props }: EditorProps) {
  const ref = useRef<ReactCodeMirrorRef>(null);

  return (
    <div className={styles.root}>
      <CodeMirror
        ref={ref}
        extensions={[json(), xml(), search({ top: true })]}
        {...props}
      />
      {/* <div className={styles.footer}>Footer</div> */}
    </div>
  );
}
