import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input', () => {
  it('renders an input field with the given value', () => {
    render(<Input name="test" value="Aaron" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('Aaron');
  });

  it('renders an input field with the given placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input name="test" placeholder="Enter value" />
    );
    expect(getByPlaceholderText('Enter value')).toBeInTheDocument();
  });

  it('calls the onChange function when the input value changes', () => {
    const handleChange = jest.fn();
    render(<Input name="test" onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'new value' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
