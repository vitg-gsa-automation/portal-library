import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';
import {
  Button,
  DropdownButton,
  DropdownItem,
  Empty,
  Filters,
  FormField,
  Select,
  SelectFilter,
  StatusIndicator,
  StatusIndicatorType,
  TextFilter,
  Value,
} from '../components';
import { useCollection } from '../hooks/useCollection';
import {
  Card,
  CardContent,
  ColumnLayout,
  Header,
  Property,
  SpaceBetween,
} from '../layouts';
import { Table, TableProps } from '../layouts/Table';
import { Item } from '../types';
import { Control, ImplementationStatus } from '../types/controls';
import { ListItem } from '../internal/components/ListItem';
import React from 'react';

export default {
  title: 'Table',
  component: Table,
};

const controls: Control[] = [
  {
    name: 'AC-1',
    description: 'Policy and Procedures',
    status: 'not-implemented',
    origin: 'Inherited',
  },
  {
    name: 'AC-2',
    description: 'Account Management',
    status: 'not-implemented',
    origin: 'Inherited',
  },
  {
    name: 'AC-3',
    description: 'Access Enforcement',
    status: 'not-implemented',
    origin: 'Inherited',
  },
  {
    name: 'AC-4',
    description: 'Information Flow Enforcement',
    status: 'implemented',
    origin: 'Inherited',
  },
  {
    name: 'AC-5',
    description: 'Separation of Duties',
    status: 'implemented',
    origin: 'Inherited',
  },
  {
    name: 'CM-8',
    description: 'Information System Component Inventory',
    status: 'implemented',
    origin: 'Inherited',
  },
  {
    name: 'MA-1',
    description: 'System Maintenance Policy and Procedures',
    status: 'implemented',
    origin: 'Inherited',
  },
  {
    name: 'MA-2',
    description: 'Controlled Maintenance',
    status: 'implemented',
    origin: 'Inherited',
  },
  {
    name: 'MA-3',
    description: '',
    status: 'implemented',
    origin: '',
  },
];
const columnHelper = createColumnHelper<Control>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Control name',
  }),
  columnHelper.accessor('description', {
    header: 'Control description',
  }),
  columnHelper.accessor('status', {
    header: 'Implementation status',
    cell: (info) => {
      const status = info.getValue();
      const getType = function (
        status: ImplementationStatus
      ): StatusIndicatorType {
        switch (status) {
          case 'implemented':
            return 'success';
          case 'not-implemented':
            return 'warning';
        }
      };
      const type = getType(status);
      return <StatusIndicator type={type}>{status}</StatusIndicator>;
    },
  }),
  columnHelper.accessor('origin', {
    header: 'Control origin',
    minSize: 0,
    size: 0,
  }),
];

export const Default: Story<TableProps<Control>> = (args) => {
  const { collectionProps } = useCollection<Control>();
  const { rowSelection } = collectionProps;
  
  return (
    <Table
      {...args}
      {...collectionProps}
      header={
        <Header
          variant="h2"
          title="Controls"
          count={
            controls.length
              ? Object.keys(rowSelection).length
                ? `(${Object.keys(rowSelection).length}/${controls.length})`
                : `(${controls.length})`
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
              </DropdownButton>
            </SpaceBetween>
          }
        />
      }
      selectionType="single"
    />
  );
};
Default.args = {
  columns,
  data: controls,
  wrapLines: false,
};

export const EmptyState: Story<TableProps<Control>> = (args) => {
  return <Table {...args} columns={columns} />;
};
EmptyState.args = {
  data: [],
  selectionType: 'single',
  wrapLines: false,
  header: <Header variant="h2" title="Controls" />,
  empty: (
    <Empty
      title="No controls"
      description="No controls to display"
      actions={<Button text="Create control" color="secondary" />}
    />
  ),
};
export const ErrorState: Story<TableProps<Control>> = (args) => {
  return <Table {...args} columns={columns} />;
};
ErrorState.args = {
  data: [],
  selectionType: 'single',
  header: <Header variant="h2" title="Controls" />,
  empty: (
    <Empty
      title="No controls"
      description="No controls to display"
      actions={<Button text="Create control" color="secondary" />}
    />
  ),
  error: 'Network Error',
  wrapLines: false,
};

export const Loading: Story<TableProps<Control>> = (args) => {
  return <Table {...args} columns={columns} />;
};
Loading.args = {
  selectionType: 'single',
  wrapLines: false,
  header: <Header variant="h2" title="Controls" />,
  data: controls,
  loading: true,
};
export const FiltersStory: Story<TableProps<Control>> = (args) => {
  const defaultFamily: Item<string> = { value: '0', label: 'Any Family' };
  const defaultStatus: Item<string> = { value: '0', label: 'Any Status' };
  function prepareSelectOptions(field: keyof Control, defaultOption: Item) {
    const optionSet: string[] = [];
    // Building a non redundant list of the field passed as parameter.
    controls.forEach((control) => {
      if (optionSet.indexOf(control[field]) === -1) {
        optionSet.push(control[field]);
      }
    });
    optionSet.sort();
    // The first element is the default one.
    const options = [defaultOption];
    // Adding the other element to the list.
    optionSet.forEach((optionLabel: string, index: number) =>
      options.push({ label: optionLabel, value: (index + 1).toString() })
    );
    return options;
  }
  function prepareFamilyOptions(defaultOption: Item) {
    const optionSet = new Set<string>();
    // Building a non redundant list of the field passed as parameter.
    controls.forEach((control) => {
      const [family] = control.name.split('-'); // Split the control on the '-' character
      optionSet.add(family);
    });
    const sortedOptions = Array.from(optionSet).sort();
    // The first element is the default one.
    const options = [defaultOption];
    // Adding the other element to the list.
    sortedOptions.forEach((family: string, index: number) => {
      options.push({ label: family, value: (index + 1).toString() });
    });
    return options;
  }
  const familyOptions = prepareFamilyOptions(defaultFamily);
  const statusOptions = prepareSelectOptions('status', defaultStatus);

  const matchesFamily = function (controlName: string, family: string) {
    if (!family) return true;
    return family === defaultFamily.label || controlName.includes(family);
  };
  const matchesStatus = function (status: string, selectedStatus: string) {
    if (!selectedStatus) return true;
    return selectedStatus === defaultStatus.label || status === selectedStatus;
  };

  const { filterProps, collectionProps } = useCollection<Control>();
  const { rowSelection } = collectionProps;

  const family = useMemo<Item<string>>(() => {
    return {
      label: filterProps.globalFilter.family,
      value: filterProps.globalFilter.family,
    };
  }, [filterProps.globalFilter.family]);

  const status = useMemo<Item<string>>(() => {
    return {
      label: filterProps.globalFilter.status,
      value: filterProps.globalFilter.status,
    };
  }, [filterProps.globalFilter.status]);

  return (
    <Table
      {...collectionProps}
      {...filterProps}
      header={
        <Header
          variant="h2"
          title="Controls"
          count={
            controls.length
              ? Object.keys(rowSelection).length
                ? `(${Object.keys(rowSelection).length}/${controls.length})`
                : `(${controls.length})`
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
              </DropdownButton>
            </SpaceBetween>
          }
        />
      }
      filter={
        <Filters>
          <TextFilter
            filteringText={filterProps.globalFilter.filteringText}
            placeholder="Find controls"
            onChange={(e) =>
              filterProps.onGlobalFilterChange((prevState) => {
                return { ...prevState, filteringText: e.target.value };
              })
            }
          />
          <SelectFilter>
            <FormField>
              <Select
                placeholder="Any family"
                items={familyOptions}
                selectedItem={family}
                onSelectChange={(item) =>
                  filterProps.onGlobalFilterChange((prevState) => {
                    if (!item.label) return prevState;
                    return { ...prevState, family: item.label };
                  })
                }
              />
            </FormField>
          </SelectFilter>
          <SelectFilter>
            <FormField>
              <Select
                placeholder="Any status"
                items={statusOptions}
                selectedItem={status}
                onSelectChange={(item) =>
                  filterProps.onGlobalFilterChange((prevState) => {
                    if (!item.label) return prevState;
                    return { ...prevState, status: item.label };
                  })
                }
              />
            </FormField>
          </SelectFilter>
        </Filters>
      }
      selectionType="single"
      columns={columns}
      data={controls}
      wrapLines={false}
      globalFilterFn={(row, columnId, filterValue) => {
        if (!matchesFamily(row.original.name, filterValue.family)) return false;
        if (!matchesStatus(row.original.status, filterValue.status))
          return false;
        const search = filterValue.filteringText.toLowerCase();

        let value = row.getValue(columnId) as string;
        if (typeof value === 'number') value = String(value);

        return value?.toLowerCase().includes(search);
      }}
    />
  );
};
FiltersStory.args = {};
export const SimpleFilter: Story<TableProps<Control>> = (args) => {
  const { filterProps, collectionProps } = useCollection<Control>();

  return (
    <Table
      {...collectionProps}
      {...filterProps}
      header={
        <Header
          variant="h2"
          title="Controls"
          count={
            controls.length
              ? Object.keys(collectionProps.rowSelection).length
                ? `(${Object.keys(collectionProps.rowSelection).length}/${
                    controls.length
                  })`
                : `(${controls.length})`
              : ''
          }
        />
      }
      filter={
        <TextFilter
          filteringText={filterProps.globalFilter.filteringText}
          placeholder="Find controls"
          onChange={(e) =>
            filterProps.onGlobalFilterChange((prevState) => {
              return { ...prevState, filteringText: e.target.value };
            })
          }
        />
      }
      selectionType="single"
      columns={columns}
      data={controls}
      wrapLines={false}
      globalFilterFn={(row, columnId, filterValue) => {
        const search = filterValue.filteringText.toLowerCase();

        let value = row.getValue(columnId) as string;
        if (typeof value === 'number') value = String(value);

        return value?.toLowerCase().includes(search);
      }}
    />
  );
};
SimpleFilter.args = {};
export const Stacked: Story<TableProps<Control>> = (args) => {
  const { filterProps, collectionProps } = useCollection<Control>();

  return (
    <React.Fragment>
      <Card
        variant="stacked"
        header={<Header variant="h2" title="Validations summary" />}
      >
        <CardContent disableTopPadding>
          <ColumnLayout columns={3}>
            <Property label="Error">
              <Value variant="large">127</Value>
            </Property>
            <Property label="Fatal">
              <Value variant="large">-</Value>
            </Property>
            <Property label="Information">
              <Value variant="large">46</Value>
            </Property>
            <Property label="Warning">
              <Value variant="large">24</Value>
            </Property>
          </ColumnLayout>
        </CardContent>
      </Card>
      <Table
        {...collectionProps}
        {...filterProps}
        variant="stacked"
        header={
          <Header
            variant="h2"
            title="Controls"
            count={
              controls.length
                ? Object.keys(collectionProps.rowSelection).length
                  ? `(${Object.keys(collectionProps.rowSelection).length}/${
                      controls.length
                    })`
                  : `(${controls.length})`
                : ''
            }
          />
        }
        filter={
          <TextFilter
            filteringText={filterProps.globalFilter.filteringText}
            placeholder="Find controls"
            onChange={(e) =>
              filterProps.onGlobalFilterChange((prevState) => {
                return { ...prevState, filteringText: e.target.value };
              })
            }
          />
        }
        selectionType="single"
        columns={columns}
        data={controls}
        wrapLines={false}
        globalFilterFn={(row, columnId, filterValue) => {
          const search = filterValue.filteringText.toLowerCase();

          let value = row.getValue(columnId) as string;
          if (typeof value === 'number') value = String(value);

          return value?.toLowerCase().includes(search);
        }}
      />
    </React.Fragment>
  );
};
Stacked.args = {};
