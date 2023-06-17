import { useRef, useState } from 'react';

import clsx from 'clsx';
import { Box } from '../../layouts/Box';
import { CardContent } from '../../layouts/Card';
import { ColumnLayout } from '../../layouts/ColumnLayout';
import { SpaceBetween } from '../../layouts/SpaceBetween';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { FormField } from '../FormField';
import { MaterialIcon } from '../MaterialIcon';
import { Modal } from '../Modal';
import { Select } from '../Select';
import styles from './index.module.scss';

export interface FileViewerProps {
  language: 'xml' | 'json' | 'yaml';
  html: string;
}

export function FileViewer({ language, html }: FileViewerProps) {
  const codeRef = useRef<HTMLElement | null>(null);
  const [hasWrappedLines, setHasWrappedLines] = useState(true);

  return (
    <div className={styles.root}>
      <div className={styles.view}>
        <pre
          className={clsx({ [styles['has-wrapped-lines']]: hasWrappedLines })}
        >
          <code
            ref={codeRef}
            className={clsx('hljs', language)}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </pre>
      </div>
      <div className={styles.footer}>
        <div>
          <span className={styles.cell}>{language}</span>
        </div>
        <div className={styles.settings}>
          <Modal
            header="Preferences"
            footer={
              <Box float="right">
                <SpaceBetween direction="horizontal" size="sm">
                  <Button text="Cancel" color="secondary" type="button" />
                  <Button text="Submit" type="submit" />
                </SpaceBetween>
              </Box>
            }
            trigger={
              <MaterialIcon
                icon="settings"
                type="outlined"
                className={styles.icon}
                fontSize="2rem"
              />
            }
          >
            <CardContent disableTopPadding>
              <ColumnLayout columns={2}>
                <Checkbox
                  label="Wrap lines"
                  id="c1"
                  checked={hasWrappedLines}
                  onCheckedChange={(checked) => {
                    if (checked === 'indeterminate') return;
                    setHasWrappedLines(checked);
                  }}
                />
                <FormField label="Theme">
                  <Select
                    items={[]}
                    onSelectChange={() => {}}
                    placeholder="Default"
                  />
                </FormField>
              </ColumnLayout>
            </CardContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}
