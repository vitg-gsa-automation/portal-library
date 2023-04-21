import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Package } from 'types';
import { Button, Empty, TextFilter, Pagination } from '../components';
import { Card, CardHeader, CardTitle, Header } from '../layouts';
import { Table, TableHeader, TableProps, TableTools } from '../layouts/Table';

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
    PkgName: 'AwesomecloudPkg2',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'November 03, 2023',
    ATOBeginDate: 'November 03, 2023',
    ATOEndDate: 'November 03, 2023',
    LastModified: 'November 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
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
    <Card header={<Header variant="h2" title="Packages" />}>
      <Table {...args} columns={columns} data-cy="table-packages" />
    </Card>
  );
};
Default.args = {
  data: pkgs,
};

export const UsingEmpty: Story<TableProps<Package>> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Packages" />}>
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

export const WithTools: Story<TableProps<Package>> = (args) => {
  return (
    <Card>
      <Table
        {...args}
        columns={columns}
        header={(table) => (
          <TableHeader
            title={<CardTitle text="Packages" count={pkgs.length} />}
            tools={
              <TableTools
                filters={
                  <TextFilter
                    filteringText=""
                    filteringPlaceholder="Find by resource"
                  />
                }
                pagination={<Pagination table={table} />}
              />
            }
          />
        )}
      />
    </Card>
  );
};
WithTools.args = {
  data: pkgs,
};
export const Loading: Story<TableProps<Package>> = (args) => {
  return (
    <Card header={<Header variant="h2" title="Packages" />}>
      <Table {...args} columns={columns} />
    </Card>
  );
};
Loading.args = {
  data: [],
  loading: true,
};
