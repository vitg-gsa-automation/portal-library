import { Story } from '@storybook/react';
import { TextFilter } from '../components';
import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTools,
  CardProps,
} from '../layouts/Card';
import { Header } from '../layouts';

export default {
  title: 'Card',
  component: Card,
};

export const Default: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
Default.args = {
  header: <Header title="Card header" variant="h2" />,
  footer: 'View more',
  children: <CardContent>This is content</CardContent>,
};

export const WithDescription: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
WithDescription.args = {
  header: (
    <Header
      title="Card header"
      variant="h2"
      description="This is a descriptive description"
    />
  ),
  footer: 'View more',
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
  footer: 'View more',
  children: <CardContent>This is content</CardContent>,
};

export const Loading: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
Loading.args = {
  header: (
    <CardHeader text="This is a descriptive description">
      Card header
    </CardHeader>
  ),
  footer: 'View more',
  loading: true,
};
