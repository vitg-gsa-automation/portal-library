import styles from './index.module.scss';
import { Dropdown, DropdownTrigger, DropdownContent } from '../Dropdown';
import { Button, ButtonProps } from '../Button';
import { MaterialIcon } from '../MaterialIcon';

export interface DropdownButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function DropdownButton({ children, ...props }: DropdownButtonProps) {
  return (
    <Dropdown modal={false}>
      <DropdownTrigger className={styles.root} asChild>
        <Button
          endIcon={
            <MaterialIcon
              icon="play_arrow"
              type="round"
              fontSize="1.6rem"
              className={styles.icon}
            />
          }
          {...props}
        />
      </DropdownTrigger>
      <DropdownContent side="bottom" align="end" loop style={{ zIndex: 99999 }}>
        {children}
      </DropdownContent>
    </Dropdown>
  );
}
