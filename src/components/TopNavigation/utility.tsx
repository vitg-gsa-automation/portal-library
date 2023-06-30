import { MenuDropdown } from '../../internal/components/MenuDropdown';
import { Utility } from './interfaces';

interface UtilityComponentProps {
  utility: Utility;
}

export function UtilityComponent({ utility }: UtilityComponentProps) {
  switch (utility.type) {
    case 'menu-dropdown':
      return <MenuDropdown {...utility} />;
    case 'button':
      return null;
  }
}
