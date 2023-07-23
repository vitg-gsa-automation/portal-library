import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';
import { MaterialIcon } from '../components/MaterialIcon';

export default {
  title: 'Button',
  component: Button,
};

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Default.args = {
  text: 'Primary',
  color: 'primary',
  size: 'small',
};

export const Secondary: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Secondary.args = {
  text: 'Secondary',
  color: 'secondary',
  size: 'small',
};

export const Large: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Large.args = {
  text: 'Secondary',
  color: 'primary',
  size: 'large',
};

export const Small: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Small.args = {
  text: 'Secondary',
  color: 'primary',
  size: 'small',
};

export const Icon: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Icon.args = {
  text: 'Primary',
  color: 'primary',
  size: 'small',
  icon: 'add',
};

export const External: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
External.args = {
  text: 'External link',
  color: 'secondary',
  href: 'https://google.com',
  endIcon: <MaterialIcon icon="open_in_new" />,
};
