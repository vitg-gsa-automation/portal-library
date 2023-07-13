import { Story } from '@storybook/react';
import { NoMatch, NoMatchProps } from '../components/NoMatch';
import { Link } from '../components/Link';

export default {
  title: 'NoMatch',
  component: NoMatch,
};

export const Default: Story<NoMatchProps> = (args) => {
  return <NoMatch {...args} />;
};
Default.args = {
  actions: <Link to="/login">Go to the login page</Link>,
};
