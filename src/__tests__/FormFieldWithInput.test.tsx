import { render, screen } from '@testing-library/react';

import styles from '../components/Input/index.module.scss';
import { FormField } from '../components/FormField';
import { Input } from '../components/Input';
import { Link } from '../components/Link';
import { BrowserRouter } from 'react-router-dom';

describe('FormField with Input integration', () => {
  it('renders a label and an Input component', () => {
    render(
      <FormField label="Username" htmlFor="username">
        <Input name="username" value="" onChange={() => {}} />
      </FormField>
    );

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('applies an "invalid" class to the Input component when an error is present', () => {
    render(
      <FormField
        label="Username"
        error="Username is required"
        htmlFor="username"
      >
        <Input
          name="username"
          value=""
          onChange={() => {}}
          data-testid="input"
        />
      </FormField>
    );

    const container = screen.getByTestId('input-container');
    expect(container).toHaveClass(styles.invalid);
  });

  it('shows all messages', () => {
    render(
      <FormField
        label="Username"
        info={
          <Link to="#" variant="info">
            Info
          </Link>
        }
        description="This is a description"
        error="Username is required"
        constraintText="This is constraint text"
        htmlFor="username"
      >
        <Input
          name="username"
          value=""
          onChange={() => {}}
          data-testid="input"
        />
      </FormField>,
      { wrapper: BrowserRouter }
    );
    const info = screen.getByText('Info');
    const description = screen.getByText('This is a description');
    const error = screen.getByText('Username is required');
    const constraintText = screen.getByText('This is constraint text');
    expect(info).toBeInTheDocument();
    expect(error).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(constraintText).toBeInTheDocument();
  });
});
