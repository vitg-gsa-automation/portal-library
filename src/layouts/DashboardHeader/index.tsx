import { ReactNode } from 'react';

import styles from './index.module.scss';
import { Select } from 'components/Select';

interface DashboardHeaderProps {
  breadcrumbs: ReactNode;
}

export function DashboardHeader({
  breadcrumbs,
  ...props
}: DashboardHeaderProps) {
  const options = [
    {
      label: 'FedRAMP Marketplace',
      value: 1,
    },
    {
      label: 'Continuous monitoring',
      value: 2,
    },
    {
      label: 'GRC Tool',
      value: 3,
    },
  ];

  return (
    <div className={styles.root} {...props}>
      <div className={styles.content}>
        {breadcrumbs}
        <Select
          selectedItem={options[0]}
          items={options}
          onSelectChange={() => {}}
        />
      </div>
    </div>
  );
}
