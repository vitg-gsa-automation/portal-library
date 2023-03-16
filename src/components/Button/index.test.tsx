import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '.';

describe('Button', () => {
  it('renders button text', () => {
    render(<Button text="Click me!" />, { wrapper: BrowserRouter });
    const button = screen.getByRole('button', {
      name: 'Click me!',
    });
    expect(button.textContent).toEqual('Click me!');
  });
  it('can show loading spinner', () => {
    render(<Button text="Click me!" loading />, { wrapper: BrowserRouter });
    const loader = screen.getByTestId('loader');
    expect(loader).toBeVisible();
  });
});
