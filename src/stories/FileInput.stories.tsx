import { Story } from '@storybook/react';
import { Value, ValueProps } from '../components/Value';
import { FileInput, FileInputProps } from '../components/FileInput';
import { Button } from '../components/Button';
import React, { ChangeEvent, useRef, useState } from 'react';

export default {
  title: 'FileInput',
  component: FileInput,
};

export const Default: Story<FileInputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleUploadChange = (fileList: FileList) => {
    const filesArray: File[] = Array.from(fileList);
    setFiles(filesArray); // Now you are setting an array of File objects
  };

  return (
    <React.Fragment>
      <FileInput
        ref={inputRef}
        onUploadChange={handleUploadChange}
        webkitdirectory=""
        directory=""
        mozdirectory=""
        odirectory=""
        msdirectory=""
      />
      <Button
        text="Select folder"
        onClick={() => inputRef.current?.click()}
        color="secondary"
      />
      <div>
        {files.map((file, index) => (
          <div key={index}>
            {file.name} - {file.size}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
Default.args = {
  children: 'Value',
};
