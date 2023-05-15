import { Story } from '@storybook/react';
import { Button } from '../components';
import { Box, Card, Header, SpaceBetween, SpaceBetweenProps } from '../layouts';

export default {
  title: 'SpaceBetween',
  component: SpaceBetween,
};

export const Default: Story<SpaceBetweenProps> = (args) => {
  return (
    <SpaceBetween {...args}>
      <Button text="Cancel" color="secondary" />
      <Button text="Save" />
    </SpaceBetween>
  );
};

Default.args = {
  direction: 'horizontal',
  size: 'xs',
};
export const Cards: Story<SpaceBetweenProps> = (args) => {
  return (
    <SpaceBetween {...args}>
      <Card
        header={<Header variant="h2" title="Card title" />}
        footer="Card footer"
      >
        Content
      </Card>
      {null}
      <Card
        header={<Header variant="h2" title="Card title" />}
        footer="Card footer"
      >
        Content
      </Card>
      <Card
        header={<Header variant="h2" title="Card title" />}
        footer="Card footer"
      >
        Content
      </Card>
    </SpaceBetween>
  );
};

Cards.args = {
  direction: 'vertical',
  size: 'xl',
};
