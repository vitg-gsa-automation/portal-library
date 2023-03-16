import styles from './index.module.scss';
import { Dropdown, DropdownTrigger, DropdownContent } from '../Dropdown';
import Button, { ButtonProps } from '../Button';
import MaterialIcon from '../MaterialIcon';

interface Props extends ButtonProps {
  children: React.ReactNode;
}

function DropdownButton({ children, ...props }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger className={styles.root}>
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
      <DropdownContent side="bottom" align="end" loop>
        {children}
      </DropdownContent>
    </Dropdown>
  );
}
export default DropdownButton;
