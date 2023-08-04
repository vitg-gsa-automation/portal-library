import { forwardRef } from 'react';

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export const ListItem = forwardRef(
  (
    { children, ...props }: ListItemProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    return (
      <li ref={ref} {...props}>
        {children}
      </li>
    );
  }
);
