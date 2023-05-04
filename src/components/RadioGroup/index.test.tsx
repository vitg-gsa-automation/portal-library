import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioGroup } from '.';

describe('RadioGroup', () => {
  const items = [
    { id: 1, value: 'option1', label: 'Option 1' },
    { id: 2, value: 'option2', label: 'Option 2', disabled: true },
    { id: 3, value: 'option3', label: 'Option 3' },
  ];

  it('renders all radio buttons', () => {
    render(<RadioGroup items={items} />);

    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(items.length);

    radioButtons.forEach((radioButton, index) => {
      expect(radioButton).toHaveAttribute('value', items[index].value);
    });
  });

  it('shows correct checked state', () => {
    const onValueChange = jest.fn();
    render(
      <RadioGroup items={items} onValueChange={onValueChange} value="option2" />
    );
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons[0]).toHaveAttribute('data-state', 'unchecked');
    expect(radioButtons[1]).toHaveAttribute('data-state', 'checked');
    expect(radioButtons[2]).toHaveAttribute('data-state', 'unchecked');
  });
});
