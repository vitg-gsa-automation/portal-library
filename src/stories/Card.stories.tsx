import { Story } from '@storybook/react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardProps,
} from '../layouts/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Default: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
Default.args = {
  header: <CardHeader>Card header</CardHeader>,
  footer: <CardFooter>View more</CardFooter>,
  children: <CardContent>This is content</CardContent>,
};

export const WithDescription: Story<CardProps> = (args) => {
  return <Card {...args} />;
};
WithDescription.args = {
  header: (
    <CardHeader text="This is a descriptive description">
      Card header
    </CardHeader>
  ),
  footer: <CardFooter>View more</CardFooter>,
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
  footer: <CardFooter>View more</CardFooter>,
  loading: true,
};
