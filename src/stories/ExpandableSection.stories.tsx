import { Story } from '@storybook/react';
import {
  ExpandableSection,
  ExpandableSectionProps,
  FormField,
  TextArea,
} from '../components';

export default {
  title: 'ExpandableSection',
  component: ExpandableSection,
};

export const Default: Story<ExpandableSectionProps> = (args) => {
  return (
    <ExpandableSection {...args}>
      <FormField label="Comments" htmlFor="comments">
        <TextArea name="comments" placeholder="Enter comments" />
      </FormField>
    </ExpandableSection>
  );
};

Default.args = {
  header: 'Additional settings',
};
