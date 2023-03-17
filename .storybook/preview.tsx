import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import '../src/sass/main.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
