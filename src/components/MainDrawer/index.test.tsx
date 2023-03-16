import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import MainDrawer from '.';

describe('MainDrawer', () => {
  const user = userEvent.setup();
  it('is open on initial render', async () => {
    render(<MainDrawer />, { wrapper: BrowserRouter });
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();
  });
  it('can be closed by clicking the close icon', async () => {
    render(<MainDrawer />, { wrapper: BrowserRouter });
    const dialog = screen.getByRole('dialog');
    const close = screen.getByRole('button', { name: 'close' });
    await user.click(close);
    expect(dialog).not.toBeVisible();
  });
  it('can be closed by hitting spacebar', async () => {
    render(<MainDrawer />, { wrapper: BrowserRouter });
    const dialog = screen.getByRole('dialog');
    const close = screen.getByRole('button', { name: 'close' });
    close.focus();
    await user.keyboard('[Space]');
    expect(dialog).not.toBeVisible();
  });
});
