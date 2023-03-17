import { Story } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button/index';

export default {
  title: 'Button',
  component: Button,
};

export const Primary: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Primary.args = {
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

export const Loading: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};
Loading.args = {
  text: 'Primary',
  color: 'primary',
  size: 'small',
  loading: true,
};
