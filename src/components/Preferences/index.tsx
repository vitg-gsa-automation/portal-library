import { MaterialIcon, MaterialIconButton } from '../MaterialIcon';
import { Modal } from '../Modal';
import { PreferencesProps } from './interfaces';

import { useState } from 'react';
import { Box } from '../../layouts/Box';
import { ColumnLayout } from '../../layouts/ColumnLayout';
import { SpaceBetween } from '../../layouts/SpaceBetween';
import { Button } from '../Button';
import { ContentDisplayPreference } from './content-display';
import styles from './index.module.scss';
import { PageSizePreference } from './page-size';

export function Preferences({
  title = 'Preferences',
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  disabled,
  preferences,
  pageSizePreference,
  wrapLinesPreference,
  contentDisplayPreference,
  onCancel,
  onConfirm,
}: PreferencesProps) {
  const [tempPreferences, setTempPreferences] = useState(preferences || {});
  const [open, setOpen] = useState(false);

  const onChange = function (changedPreferences: PreferencesProps.Preferences) {
    const merged = { ...tempPreferences, ...changedPreferences };
    setTempPreferences(merged);
  };

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      size="large"
      header={title}
      trigger={
        <MaterialIconButton
          iconType="outlined"
          icon="settings"
          className={styles.trigger}
          fontSize="2rem"
        />
      }
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button
              text={cancelLabel}
              color="secondary"
              onClick={(e) => {
                if (onCancel) {
                  onCancel();
                }
                setOpen(false);
              }}
            />
            <Button
              text={confirmLabel}
              onClick={(e) => {
                if (onConfirm) {
                  onConfirm(tempPreferences);
                }
                setOpen(false);
              }}
            />
          </SpaceBetween>
        </Box>
      }
    >
      <ColumnLayout columns={2}>
        <div>
          {pageSizePreference && (
            <PageSizePreference
              pageSizePreference={pageSizePreference}
              onChange={(value) => onChange({ pageSize: value })}
              value={tempPreferences.pageSize}
            />
          )}
        </div>
        {contentDisplayPreference ? (
          <ContentDisplayPreference
            {...contentDisplayPreference}
            value={tempPreferences.contentDisplay}
            onChange={(contentDisplay) => {
              onChange({ contentDisplay });
            }}
          />
        ) : undefined}
      </ColumnLayout>
    </Modal>
  );
}
