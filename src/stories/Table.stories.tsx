import { Story } from '@storybook/react';
import { RowSelectionState, createColumnHelper } from '@tanstack/react-table';
import { Package } from 'types';
import {
  Button,
  Empty,
  TextFilter,
  Pagination,
  Checkbox,
  StatusIndicator,
  Link,
} from '../components';
import {
  Box,
  Card,
  CardHeader,
  CardTitle,
  Header,
  SpaceBetween,
} from '../layouts';
import { Table, TableHeader, TableProps, TableTools } from '../layouts/Table';
import { useState } from 'react';

export default {
  title: 'Table',
  component: Table,
};

const pkgs: Package[] = [
  {
    PkgName: 'VITGPkg1',
    SystemID: 43242,
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
    SystemID: 543,
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'November 03, 2023',
    ATOBeginDate: 'November 03, 2023',
    ATOEndDate: 'November 03, 2023',
    LastModified: 'November 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    PkgName: 'GooglePkg3',
    SystemID: 765,
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    PkgName: 'MicrosoftPkg3',
    SystemID: 987,
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    PkgName: 'AwesomecloudPkg3',
    SystemID: 987,
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 65,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 98,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 2345,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 65,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 9876,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 65,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 2,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 234,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc: 'Pkg description',
    Status: 'Pending',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 654,
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
  columnHelper.accessor('SystemID', {
    header: 'SystemID',
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
    cell: (info) => (
      <StatusIndicator type="pending">{info.getValue()}</StatusIndicator>
    ),
  }),
];

export const Default: Story<TableProps<Package>> = (args) => {
  const [filteringText, setFilteringText] = useState('');
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  return (
    <Table
      {...args}
      columns={columns}
      header={
        <Header
          variant="h2"
          title="Default table"
          count={
            pkgs.length
              ? Object.keys(rowSelection).length
                ? `(${Object.keys(rowSelection).length}/${pkgs.length})`
                : `(${pkgs.length})`
              : ''
          }
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                color="secondary"
                text="Secondary button"
                disabled={!Object.keys(rowSelection).length}
              />
              <Button text="Create resource" />
            </SpaceBetween>
          }
        />
      }
      footer={
        <Box textAlign="center">
          <Link to="#">View all packages</Link>
        </Box>
      }
      filter={
        <TextFilter
          filteringText={filteringText}
          onChange={(e) => setFilteringText(e.target.value)}
          filteringPlaceholder="Find by resource"
        />
      }
      filteringText={filteringText}
      rowSelection={rowSelection}
      onRowSelectionChange={setRowSelection}
    />
  );
};
Default.args = {
  data: pkgs,
  pagination: true,
  selectionType: 'multi',
};

export const EmptyState: Story<TableProps<Package>> = (args) => {
  return <Table {...args} columns={columns} />;
};
EmptyState.args = {
  data: [],
  header: <Header variant="h2" title="Packages" />,
  empty: (
    <Empty
      title="No packages"
      description="No packages to display"
      actions={<Button text="Create package" color="secondary" />}
    />
  ),
};
export const ErrorState: Story<TableProps<Package>> = (args) => {
  return <Table {...args} columns={columns} />;
};
ErrorState.args = {
  data: [],
  header: <Header variant="h2" title="Packages" />,
  empty: (
    <Empty
      title="No packages"
      description="No packages to display"
      actions={<Button text="Create package" color="secondary" />}
    />
  ),
  error: 'Network Error',
};

export const Loading: Story<TableProps<Package>> = (args) => {
  return <Table {...args} columns={columns} />;
};
Loading.args = {
  header: <Header variant="h2" title="Packages" />,
  data: pkgs,
  loading: true,
  filter: (
    <TextFilter filteringText={''} filteringPlaceholder="Find by resource" />
  ),
};
