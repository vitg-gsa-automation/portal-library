import { useEffect, useRef, useState } from 'react';

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
import { StatusIndicator } from '../StatusIndicator';
import { OSCALExtension } from '../../types/files';
import { Empty } from '../Empty';

export interface FileViewerProps {
  language: OSCALExtension;
  html: string;
  disableFooter?: boolean;
  loading?: boolean;
  loadingText?: string;
  error?: string;
  onMount?: () => void;
  onHtmlChange?: (html: string) => void;
  onRendered?: (html: string) => void;
}

export function FileViewer({
  language,
  html,
  disableFooter,
  loading,
  loadingText = 'Loading',
  error,
  onMount,
  onHtmlChange,
  onRendered,
}: FileViewerProps) {
  const codeRef = useRef<HTMLElement | null>(null);
  const [hasWrappedLines, setHasWrappedLines] = useState(true);
  useEffect(() => {
    if (onMount) {
      onMount();
    }
  }, []);

  useEffect(() => {
    if (onHtmlChange) {
      onHtmlChange(html);
    }
  }, [html]);

  useEffect(() => {
    if (!onRendered) return;
    //requestAnimationFrame schedules the execution of a function after the next frame is painted
    // Here, it's used to ensure that `onRendered` is called after the DOM is painted
    requestAnimationFrame(() => {
      onRendered(html);
    });
  }, [html, onRendered]);

  const isFooterDisabled = disableFooter;
  return (
    <div className={styles.root}>
      <div className={styles.view}>
        {loading ? (
          <div className={styles.loading}>
            <StatusIndicator type="loading">{loadingText}</StatusIndicator>
          </div>
        ) : error ? (
          <div className={styles.error}>
            <StatusIndicator type="error">{error}</StatusIndicator>
          </div>
        ) : (
          <pre
            className={clsx({
              [styles['has-wrapped-lines']]: hasWrappedLines,
            })}
          >
            <code
              ref={codeRef}
              className={clsx('hljs', language)}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </pre>
        )}
      </div>
      {!isFooterDisabled && (
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
      )}
    </div>
  );
}
