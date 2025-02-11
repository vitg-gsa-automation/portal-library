import { Story } from '@storybook/react';
import {
  Button,
  ExpandableSection,
  FormField,
  Link,
  TextArea,
} from '../components';
import { Box, Header, SpaceBetween } from '../layouts';
import { Card, CardContent, CardProps } from '../layouts/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
Default.args = {
  header: (
    <Header
      title="Card header"
      variant="h2"
      description="This is a description"
      actions={
        <SpaceBetween direction="horizontal" size="sm">
          <Button text="View" color="secondary" />
          <Button text="Edit resource" color="secondary" />
          <Button text="Create resource" />
        </SpaceBetween>
      }
    />
  ),
  children: <CardContent>This is content</CardContent>,
};

export const Loading: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
Loading.args = {
  header: (
    <Header
      variant="h2"
      title="Card header"
      description="This is a descriptive description"
    />
  ),
  footer: (
    <Box textAlign="center">
      <Link to="#">View more</Link>
    </Box>
  ),
  loading: true,
};
