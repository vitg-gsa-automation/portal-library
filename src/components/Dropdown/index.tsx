import { forwardRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import styles from './index.module.scss';

interface DropdownTriggerProps extends DropdownMenu.DropdownMenuTriggerProps {
  children: React.ReactElement<HTMLButtonElement>;
}
interface DropdownContentProps extends DropdownMenu.DropdownMenuContentProps {}
interface DropdownItemProps extends DropdownMenu.DropdownMenuItemProps {
  children: React.ReactNode;
}

export const Dropdown = DropdownMenu.Root;

export const DropdownTrigger = forwardRef<
  HTMLButtonElement,
  DropdownTriggerProps
>(({ children, ...props }: DropdownTriggerProps, ref) => {
  return (
    <DropdownMenu.Trigger {...props} ref={ref} asChild>
      {children}
    </DropdownMenu.Trigger>
  );
});

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  ({ children, ...props }: DropdownContentProps, ref) => {
    return (
      <DropdownMenu.Portal>
        <DropdownMenu.Content {...props} ref={ref} className={styles.content}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    );
  }
);

export const DropdownItem = forwardRef<any, DropdownItemProps>(
  ({ children, ...props }: DropdownItemProps, ref) => {
    return (
      <DropdownMenu.Item {...props} ref={ref} asChild>
        {children}
      </DropdownMenu.Item>
    );
  }
);
