import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('Checkbox', () => {
  const user = userEvent.setup();
  it('can change checked state', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('renders a checkmark icon when checked', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    const checkmark = screen.getByText('done');
    expect(checkmark).toBeVisible();
  });
});
