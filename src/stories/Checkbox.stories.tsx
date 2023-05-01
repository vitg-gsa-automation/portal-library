import { Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../components/Checkbox';
import { Link } from '../components/Link';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Default: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />;
};

Default.args = {
  id: 'c1',
  label: (
    <span>
      I have read and agree not to submit sensitive data according to the terms
      specified in the <Link to="#">BETA TEST SITE AGREEMENT</Link>
    </span>
  ),
};
export const WrappedText: Story<CheckboxProps> = (args) => {
  return (
    <div style={{ width: '500px' }}>
      <Checkbox {...args} />
    </div>
  );
};

WrappedText.args = {
  id: 'c1',
  label: (
    <span>
      I have read and agree not to submit sensitive data according to the terms
      specified in the <Link to="#">BETA TEST SITE AGREEMENT</Link>
    </span>
  ),
};
