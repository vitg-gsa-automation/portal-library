import { Story } from '@storybook/react';
import { CardHeader, CardTitle } from '../layouts/Card';
import { Cards, CardsProps, Button, Chip, Link } from '../components';
import { Package } from '../types';

const pkgs: Package[] = [
  {
    PkgName: 'AweseomCloud1',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AweseomCloud2',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AweseomCloud3',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AweseomCloud4',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AweseomCloud',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
];

export default {
  title: 'Cards',
  component: Cards,
};

export const Simple: Story<CardsProps> = (args) => {
  return (
    <Cards
      {...args}
      cardDefinition={{
        header: (item) => (
          <Link to={'/packages/' + item.PkgName} size="l">
            {item.PkgName}
          </Link>
        ),
        sections: [
          {
            id: 'auth',
            label: 'Authentication type',
            value: (item) => item.AuthType,
          },
          {
            id: 'status',
            label: 'Status',
            value: (item) => <Chip color="gray">{item.Status}</Chip>,
          },
        ],
      }}
      items={pkgs}
    />
  );
};
Simple.args = {
  header: (
    <CardHeader actions={<Button text="Create package" />}>
      <CardTitle text="Recent authorization packages" count={pkgs.length} />
    </CardHeader>
  ),
  cardsPerRow: 3,
};
