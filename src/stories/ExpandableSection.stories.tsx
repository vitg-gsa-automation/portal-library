import { Story } from '@storybook/react';
import {
  Button,
  DropdownButton,
  DropdownItem,
  ExpandableSection,
  ExpandableSectionProps,
  FormField,
  ListItem,
  StatusIndicator,
  TextArea,
} from '../components';
import {
  CardContent,
  ColumnLayout,
  Header,
  Property,
  SpaceBetween,
  Table,
} from '../layouts';
import { Package } from '../types/packages';
import { RowSelectionState, createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';

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
    minSize: 185,
  }),

  columnHelper.accessor('Status', {
    header: 'Status',
    minSize: 185,
    cell: (info) => (
      <StatusIndicator type="success">{info.getValue()}</StatusIndicator>
    ),
    enableSorting: false,
  }),
  columnHelper.accessor('PkgDesc', {
    header: 'Description',
    size: 0,
    minSize: 0,
  }),
];

export default {
  title: 'ExpandableSection',
  component: ExpandableSection,
};

export const Default: Story<ExpandableSectionProps> = (args) => {
  return (
    <ExpandableSection {...args}>
      <CardContent disableTopPadding>
        <ColumnLayout columns={3}>
          <Property label="File name">VITGSSP1.xml</Property>
          <Property label="File size">12 KB</Property>
          <Property label="Status">
            <StatusIndicator type="success">Uploaded</StatusIndicator>
          </Property>
        </ColumnLayout>
      </CardContent>
    </ExpandableSection>
  );
};

Default.args = {
  headerText: 'Additional settings',
};

export const Card: Story<ExpandableSectionProps> = (args) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  return (
    <ExpandableSection
      headerCounter={
        pkgs.length
          ? Object.keys(rowSelection).length
            ? `(${Object.keys(rowSelection).length}/${pkgs.length})`
            : `(${pkgs.length})`
          : ''
      }
      headerActions={
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
          </DropdownButton>
        </SpaceBetween>
      }
      {...args}
    >
      <Table
        variant="embedded"
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        selectionType='single'
        columns={columns}
        data={pkgs}
      />
    </ExpandableSection>
  );
};

Card.args = {
  headerText: 'Additional settings',
  variant: 'card',
  headerActions: <Button text="View details" color="secondary" />,
};
