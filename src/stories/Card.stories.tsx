import { Story } from '@storybook/react';
import { ExpandableSection, FormField, Link, TextArea } from '../components';
import { Box, Header } from '../layouts';
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
    />
  ),
  footer: (
    <ExpandableSection header="Review comments">
      <FormField label="Comments" htmlFor="comments">
        <TextArea name="comments" placeholder="Enter comments" />
      </FormField>
    </ExpandableSection>
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
