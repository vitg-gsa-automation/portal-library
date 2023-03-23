import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Card, CardHeader } from '../layouts';
import { useMemo } from 'react';
import { Package } from 'types';
import { Table, TableProps } from '../layouts/Table';
import { Button, Empty } from '../components';

export default {
  title: 'Table',
  component: Table,
};

const pkgs: Package[] = [
  {
    PkgName: 'AwesomecloudPkg1',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'March 03, 2023',
    ATOBeginDate: 'March 03, 2023',
    ATOEndDate: 'March 03, 2023',
    LastModified: 'March 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    PkgName: 'AwesomecloudPkg1',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'March 03, 2023',
    ATOBeginDate: 'March 03, 2023',
    ATOEndDate: 'March 03, 2023',
    LastModified: 'March 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    PkgName: 'AwesomecloudPkg1',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'March 03, 2023',
    ATOBeginDate: 'March 03, 2023',
    ATOEndDate: 'March 03, 2023',
    LastModified: 'March 03, 2023',
    ContactName: 'Aaron Nolan',
  },
];

const columnHelper = createColumnHelper<Package>();
const columns = [
  columnHelper.accessor('PkgName', {
    header: 'Package name',
  }),
  columnHelper.accessor('ATOBeginDate', {
    header: 'ATO Begins',
  }),
  columnHelper.accessor('ATOEndDate', {
    header: 'ATO Ends',
  }),
  columnHelper.accessor('ContactName', {
    header: 'Created by',
  }),
  columnHelper.accessor('LastModified', {
    header: 'Last modified',
  }),
  columnHelper.accessor('Status', {
    header: 'Status',
  }),
];

export const Default: Story<TableProps<Package>> = (args) => {
  return (
    <Card header={<CardHeader>Packages</CardHeader>}>
      <Table {...args} columns={columns} data-cy="table-packages" />
    </Card>
  );
};
Default.args = {
  data: pkgs,
};

export const UsingEmpty: Story<TableProps<Package>> = (args) => {
  return (
    <Card header={<CardHeader>Packages</CardHeader>}>
      <Table {...args} columns={columns} />
    </Card>
  );
};
UsingEmpty.args = {
  data: [],
  empty: (
    <Empty
      title="No packages"
      description="No packages to display"
      actions={<Button text="Create package" color="secondary" />}
    />
  ),
};

export const Loading: Story<TableProps<Package>> = (args) => {
  return (
    <Card header={<CardHeader>Packages</CardHeader>}>
      <Table {...args} columns={columns} />
    </Card>
  );
};
Loading.args = {
  data: [],
  loading: true,
};
