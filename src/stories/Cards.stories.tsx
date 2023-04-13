import { Story } from '@storybook/react';
import { CardHeader, CardTitle } from '../layouts/Card';
import { Cards, CardsProps, Button, Chip, Link } from '../components';
import { Package } from '../types';
import { Header } from '../layouts';

const pkgs: Package[] = [
  {
    PkgName: 'AwesomeCloud1',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AwesomeCloud2',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AwesomeCloud3',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AwesomeCloud4',
    AuthType: 'JAB Provisional',
    Status: 'Pending',
  },
  {
    PkgName: 'AwesomeCloud',
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
    <Header
      title="Recent authorization packages"
      count={`(${pkgs.length})`}
      variant="h2"
    />
  ),
  cardsPerRow: 3,
};
