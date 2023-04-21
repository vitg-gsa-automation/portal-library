import { Story } from '@storybook/react';
import { Button } from '../components';
import { Modal } from '../components/Modal';
import { CardContent, SpaceBetween } from '../layouts';
import { Box } from '../layouts/Box';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default: Story = (args) => {
  return (
    <Modal
      title="Modal"
      trigger={<Button text="View" color="secondary" icon="visibility" />}
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button text="Cancel" color="secondary" />
            <Button text="Save" />
          </SpaceBetween>
        </Box>
      }
    >
      <CardContent>content</CardContent>
    </Modal>
  );
};
