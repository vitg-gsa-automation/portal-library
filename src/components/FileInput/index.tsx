import React, { ForwardedRef, forwardRef } from 'react';
import styles from './index.module.scss';

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  webkitdirectory?: string;
  directory?: string;
  mozdirectory?: string;
  odirectory?: string;
  msdirectory?: string;
  onUploadChange: (fileList: FileList) => void;
}

export const FileInput = forwardRef(
  (
    { onUploadChange, ...props }: FileInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const handleUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const fileList = event.target.files;
      if (!fileList) throw new Error('No files selected');
      onUploadChange(fileList);
      event.target.value = '';
    };
    return (
      <input
        type="file"
        ref={ref}
        className={styles.root}
        accept="*"
        onChange={handleUploadChange}
        multiple
        {...props}
      />
    );
  }
);
