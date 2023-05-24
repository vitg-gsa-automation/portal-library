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
  DropdownButton,
  DropdownItem,
  ListItem,
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
    SystemID: 2,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc:
      'Here is a long enough package description some extra textHere is a long enough package description some extra textHere is a long enough package description some extra textHere is a long enough package description some extra text',
    Status: 'FedRAMP Ready',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 234,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc:
      'Here is a long enough package description for some extraHere is a long enough package description for some extra',
    Status: 'FedRAMP Ready',
    PkgCreateDate: 'Jan 03, 2023',
    ATOBeginDate: 'Jan 03, 2023',
    ATOEndDate: 'Jan 03, 2023',
    LastModified: 'Jan 03, 2023',
    ContactName: 'Aaron Nolan',
  },
  {
    SystemID: 654,
    PkgName: 'AwesomecloudPkg3',
    PkgDesc:
      'Here is a long enough package description againpackage description againpackage description againpackage description again',
    Status: 'FedRAMP Ready',
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
    size: 200,
  }),

  columnHelper.accessor('Status', {
    header: 'Status',
    cell: (info) => (
      <StatusIndicator type="success">{info.getValue()}</StatusIndicator>
    ),
    size: 175,
    enableSorting: false,
  }),
  columnHelper.accessor('PkgDesc', {
    header: 'Description',
    size: 0,
    minSize: 0,
  }),
  // columnHelper.accessor('ATOBeginDate', {
  //   header: 'ATO Begins',
  // }),
  // columnHelper.accessor('ATOEndDate', {
  //   header: 'ATO Ends',
  // }),
  // columnHelper.accessor('ContactName', {
  //   header: 'Created by',
  // }),
  // columnHelper.accessor('LastModified', {
  //   header: 'Last modified',
  // }),
];

export const Default: Story<TableProps<Package>> = (args) => {
  const [filteringText, setFilteringText] = useState('');
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  return (
    <Table
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
              <DropdownButton text="Create resource">
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
                <DropdownItem>
                  <ListItem>Item 1</ListItem>
                </DropdownItem>
              </DropdownButton>
            </SpaceBetween>
          }
        />
      }
      // footer={
      //   <Box textAlign="center">
      //     <Link to="#">View all packages</Link>
      //   </Box>
      // }
      rowSelection={rowSelection}
      onRowSelectionChange={setRowSelection}
      resizableColumns
      {...args}
    />
  );
};
Default.args = {
  columns,
  data: pkgs,
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
};
