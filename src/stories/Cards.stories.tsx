import { Story } from '@storybook/react';
import { CardHeader, CardTitle } from '../layouts/Card';
import {
  Cards,
  CardsProps,
  Button,
  Chip,
  Link,
  StatusIndicator,
} from '../components';
import { Package } from '../types';
import { Header } from '../layouts';

const pkgs: Package[] = [
  {
    PkgName: 'AwesomeCloud1',
    PkgDesc: 'This is a desctiption',
    AuthType: 'JAB Provisional',
    Status: 'Cancelled',
    ATOBeginDate: 'Jan 12, 1991',
    ATOEndDate: 'Jan 12, 2024',
  },
  {
    PkgName: 'AwesomeCloud2',
    AuthType: 'JAB Provisional',
    Status: 'Cancelled',
  },
  {
    PkgName: 'AwesomeCloud3',
    AuthType: 'JAB Provisional',
    Status: 'Cancelled',
  },
  {
    PkgName: 'AwesomeCloud4',
    AuthType: 'JAB Provisional',
    Status: 'Cancelled',
  },
  {
    PkgName: 'AwesomeCloud',
    AuthType: 'JAB Provisional',
    Status: 'Cancelled',
  },
];

export default {
  title: 'Cards',
  component: Cards,
};

export const Default: Story<CardsProps> = (args) => {
  return <Cards {...args} />;
};
Default.args = {
  header: (
    <Header
      title="Recent authorization packages"
      count={`(${pkgs.length})`}
      variant="h2"
    />
  ),
  cardDefinition: {
    header: (item) => (
      <Link to={'/packages/' + item.PkgName} size="l">
        {item.PkgName}
      </Link>
    ),
    sections: [
      {
        id: 'description',
        label: 'Description',
        value: (item) => item.PkgDesc,
      },
      {
        id: 'auth',
        label: 'Authentication type',
        value: (item) => item.AuthType,
      },
      {
        id: 'begin',
        label: 'ATO Begin date',
        value: (item) => item.ATOBeginDate,
      },
      {
        id: 'end',
        label: 'ATO End date',
        value: (item) => item.ATOEndDate,
      },
      {
        id: 'status',
        label: 'Status',
        value: (item) => (
          <StatusIndicator type="error">{item.Status}</StatusIndicator>
        ),
      },
    ],
  },
  items: pkgs,
  cardsPerRow: 3,
};
