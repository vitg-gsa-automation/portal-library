import { Story } from '@storybook/react';
import { Link, TextFilter } from '../components';
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTools,
  CardProps,
} from '../layouts/Card';
import { Box, Header } from '../layouts';

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
    />
  ),
  footer: (
    <Box textAlign="center">
      <Link to="#">View more</Link>
    </Box>
  ),
  children: <CardContent>This is content</CardContent>,
};

export const WithTools: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
WithTools.args = {
  header: (
    <CardHeader
      text="This is a descriptive description"
      tools={<CardHeaderTools searchInput={<TextFilter filteringText="" />} />}
    >
      Card header
    </CardHeader>
  ),
  footer: (
    <Box textAlign="center">
      <Link to="#">View more</Link>
    </Box>
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
