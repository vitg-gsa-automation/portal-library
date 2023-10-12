import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Control, Item, Package } from '../types';
import {
  Button,
  DropdownButton,
  ExpandableSection,
  Filters,
  Flashbar,
  FormField,
  Link,
  PageHeader,
  Preferences,
  Select,
  SelectFilter,
  StatusIndicator,
  Table,
  TableProps,
  TextFilter,
  TopNavigation,
} from '../components';
import { useCollection, useNotifications } from '../hooks';
import { useTools } from '../hooks/useTools';
import {
  AppLayout,
  Card,
  CardContent,
  ColumnLayout,
  ContentLayout,
  Header,
  HelpPanel,
  Layout,
  Property,
  SideNavigation,
  SpaceBetween,
} from '../layouts';
import { Footer } from '../layouts/Footer';
import packageJSON from '../../package.json';

export default {
  title: 'AppLayout',
  component: AppLayout,
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
  const { notifications, dismiss, publish } = useNotifications();
  const { activeTool, toolsOpen, openTool, setToolsOpen } = useTools([
    <HelpPanel
      header={{ href: '#', text: 'Control description' }}
      content={
        <div>
          CM-8 Information System Component Inventory makes sure that the
          organization develops, documents, and maintains an inventory of
          information system components that:
          <ol style={{ marginTop: '1rem' }}>
            <li>Accurately reflects the current information system</li>
            <li>Includes all components within the system</li>
            <li>
              Does not include duplicate accounting of components or components
              assigned to any other system
            </li>
            <li>
              Is at the level of granularity deemed necessary for tracking and
              reporting
            </li>
            <li>
              Includes the following information to achieve system component
              accountability: [organization-defined information deemed necessary
              to achieve effective system component accountability]
            </li>
          </ol>
        </div>
      }
    />,
  ]);
  // useEffect(() => {
  //   publish([
  //     {
  //       id: 2,
  //       type: 'success',
  //       content: 'Successfully converted AwesomeCloudSSP1 to a Word file',
  //       dismissable: true,
  //       onDismiss: dismiss,
  //     },
  //   ]);
  // }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            navigation={
              <TopNavigation
                title="Authorization portal"
                logo={'/'}
                href="#"
                menuDropdownUtility={{
                  type: 'menu-dropdown',
                  text: 'Aaron Nolan',
                  description: 'aaron.nolan@volpegroup.com',
                  icon: 'user-profile',
                  items: [
                    {
                      id: 'profile',
                      text: 'Account',
                    },
                    { id: 'preferences', text: 'Preferences' },
                    {
                      id: 'support-group',
                      text: 'Support',
                      items: [
                        {
                          id: 'documentation',
                          text: 'API Documentation',
                        },
                        {
                          id: 'feedback',
                          text: 'Feedback',
                          href: 'mailto:aaron.nolan@volpegroup.com',
                          external: true,
                        },
                      ],
                    },
                    { id: 'signout', text: 'Sign out' },
                  ],
                }}
              />
            }
            footer={
              <Footer
                appName="FedRAMP Authorization Portal"
                version={packageJSON.version}
                buildDate="July 25, 2023"
                items={[
                  {
                    id: 'about',
                    text: 'About',
                    to: '/',
                    external: false,
                  },
                  {
                    id: 'feedback',
                    text: 'Feedback',
                    to: '/',
                    external: false,
                  },
                  {
                    id: 'doc',
                    text: 'API documentation',
                    href: 'https://google.com',
                    external: true,
                  },
                ]}
              />
            }
          />
        }
      >
        <Route
          index
          element={
            <AppLayout
              {...args}
              breadcrumbs={<div>breadcrumbs</div>}
              notifications={
                notifications.length ? (
                  <Flashbar items={notifications} />
                ) : undefined
              }
              navigation={
                <SideNavigation
                  header={{ href: '#', text: 'Authorizations' }}
                  items={[
                    {
                      id: 'dashboard1',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/dashboard',
                    },
                    {
                      id: 'home2',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/home',
                    },
                    {
                      id: 'add3',
                      type: 'section',
                      text: 'Navigation link',
                      href: '/add1',
                      items: [
                        {
                          id: 'dashboard4',
                          type: 'link',
                          text: 'Monitoring (ConMon)',
                          href: 'https://google.com',
                          external: true,
                        },
                        {
                          id: 'home5',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/home1',
                        },
                      ],
                    },
                    {
                      id: 'add6',
                      type: 'section',
                      text: 'Navigation link',
                      href: '/add2',
                      items: [
                        {
                          id: 'dashboard7',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/dashboard2',
                        },
                        {
                          id: 'home8',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/home2',
                        },
                      ],
                    },
                    {
                      id: 'd1',
                      type: 'divider',
                    },
                    {
                      id: 'link1',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/1',
                    },
                    {
                      id: 'link2',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/2',
                    },
                    {
                      id: 'link3',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/3',
                    },
                    {
                      id: 'link4',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/4',
                    },
                  ]}
                />
              }
              content={
                <ContentLayout
                  header={
                    <PageHeader>
                      <Header
                        title="Validation result for AwesomeCloudSSP1.xml"
                        actions={
                          <React.Fragment>
                            <Button text="Edit resource" color="secondary" />
                            <DropdownButton text="Actions">list</DropdownButton>
                          </React.Fragment>
                        }
                        info={
                          <Link
                            to="#"
                            variant="info"
                            onClick={() => openTool(0)}
                          >
                            Info
                          </Link>
                        }
                      />
                    </PageHeader>
                  }
                >
                  <SpaceBetween>
                    <Card
                      header={
                        <Header
                          variant="h2"
                          title="Validation details"
                          actions={<Button text="Edit" color="secondary" />}
                        />
                      }
                    >
                      <CardContent disableTopPadding>
                        <ColumnLayout columns={3}>
                          <SpaceBetween>
                            <Property data-cy="name" label="Name">
                              AwesomeClouSSP1
                            </Property>
                            <Property data-cy="description" label="Description">
                              System Security Plan
                            </Property>
                            <Property label="Status">
                              <StatusIndicator type="success">
                                FedRAMP Ready
                              </StatusIndicator>
                            </Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                        </ColumnLayout>
                      </CardContent>
                    </Card>
                    <ExpandableSection
                      variant="card"
                      headerText="Basic Schema Check"
                      headerCounter="(1)"
                      headerActions={
                        <Button text="View details" color="secondary" />
                      }
                    >
                      <CardContent disableTopPadding>
                        <ColumnLayout columns={3}>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Description">
                              System Security Plan
                            </Property>
                            <Property label="Status">
                              <StatusIndicator type="success">
                                FedRAMP Ready
                              </StatusIndicator>
                            </Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                        </ColumnLayout>
                      </CardContent>
                    </ExpandableSection>
                    <ExpandableSection
                      variant="card"
                      headerText="NIST Schema Validation"
                      headerCounter="(6)"
                      headerActions={
                        <Button text="View details" color="secondary" />
                      }
                    >
                      <CardContent disableTopPadding>
                        <ColumnLayout columns={3}>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Description">
                              System Security Plan
                            </Property>
                            <Property label="Status">
                              <StatusIndicator type="success">
                                FedRAMP Ready
                              </StatusIndicator>
                            </Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                        </ColumnLayout>
                      </CardContent>
                    </ExpandableSection>
                    <ExpandableSection
                      variant="card"
                      headerText="FedRAMP Schematron Validation"
                      headerCounter="(203)"
                      headerActions={
                        <Button text="View details" color="secondary" />
                      }
                    >
                      <CardContent disableTopPadding>
                        <ColumnLayout columns={3}>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Description">
                              System Security Plan
                            </Property>
                            <Property label="Status">
                              <StatusIndicator type="success">
                                FedRAMP Ready
                              </StatusIndicator>
                            </Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                          <SpaceBetween>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                            <Property label="Name">AwesomeClouSSP1</Property>
                          </SpaceBetween>
                        </ColumnLayout>
                      </CardContent>
                    </ExpandableSection>
                  </SpaceBetween>
                </ContentLayout>
              }
              tools={activeTool}
              toolsOpen={toolsOpen}
              onToolsChange={setToolsOpen}
            />
          }
        />
      </Route>
    </Routes>
  );
};
Default.args = {
  data: pkgs,
};

Default.parameters = {
  layout: 'none',
};

export const FullPageTable: Story<TableProps<Package>> = (args) => {
  const { filterProps, collectionProps } = useCollection<Package>();
  const { notifications, dismiss, publish } = useNotifications();
  const { activeTool, toolsOpen, openTool, setToolsOpen } = useTools([
    <HelpPanel
      header={{ href: '#', text: 'Control description' }}
      content={
        <div>
          CM-8 Information System Component Inventory makes sure that the
          organization develops, documents, and maintains an inventory of
          information system components that:
          <ol style={{ marginTop: '1rem' }}>
            <li>Accurately reflects the current information system</li>
            <li>Includes all components within the system</li>
            <li>
              Does not include duplicate accounting of components or components
              assigned to any other system
            </li>
            <li>
              Is at the level of granularity deemed necessary for tracking and
              reporting
            </li>
            <li>
              Includes the following information to achieve system component
              accountability: [organization-defined information deemed necessary
              to achieve effective system component accountability]
            </li>
          </ol>
        </div>
      }
    />,
  ]);

  const defaultStatus: Item<string> = { value: '0', label: 'Any Status' };
  function prepareSelectOptions(field: keyof Package, defaultOption: Item) {
    const optionSet: string[] = [];
    // Building a non redundant list of the field passed as parameter.
    pkgs.forEach((pkg) => {
      const value = pkg[field];
      if (value && optionSet.indexOf(String(value)) === -1) {
        optionSet.push(String(value));
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

  const statusOptions = prepareSelectOptions('Status', defaultStatus);

  const matchesStatus = function (status: string, selectedStatus: string) {
    if (!selectedStatus) return true;
    return selectedStatus === defaultStatus.label || status === selectedStatus;
  };

  const status = useMemo<Item<string>>(() => {
    return {
      label: filterProps.globalFilter.status,
      value: filterProps.globalFilter.status,
    };
  }, [filterProps.globalFilter.status]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            navigation={
              <TopNavigation
                title="Authorization portal"
                logo={'/'}
                href="#"
                menuDropdownUtility={{
                  type: 'menu-dropdown',
                  text: 'Aaron Nolan',
                  description: 'aaron.nolan@volpegroup.com',
                  icon: 'user-profile',
                  items: [
                    {
                      id: 'profile',
                      text: 'Account',
                    },
                    { id: 'preferences', text: 'Preferences' },
                    {
                      id: 'support-group',
                      text: 'Support',
                      items: [
                        {
                          id: 'documentation',
                          text: 'API Documentation',
                        },
                        {
                          id: 'feedback',
                          text: 'Feedback',
                          href: 'mailto:aaron.nolan@volpegroup.com',
                          external: true,
                        },
                      ],
                    },
                    { id: 'signout', text: 'Sign out' },
                  ],
                }}
              />
            }
            footer={
              <Footer
                appName="FedRAMP Authorization Portal"
                version={packageJSON.version}
                buildDate="July 25, 2023"
                items={[
                  {
                    id: 'about',
                    text: 'About',
                    to: '/',
                    external: false,
                  },
                  {
                    id: 'feedback',
                    text: 'Feedback',
                    to: '/',
                    external: false,
                  },
                  {
                    id: 'doc',
                    text: 'API documentation',
                    href: 'https://google.com',
                    external: true,
                  },
                ]}
              />
            }
          />
        }
      >
        <Route
          index
          element={
            <AppLayout
              {...args}
              breadcrumbs={<div>breadcrumbs</div>}
              notifications={
                notifications.length ? (
                  <Flashbar items={notifications} />
                ) : undefined
              }
              navigation={
                <SideNavigation
                  header={{ href: '#', text: 'Authorizations' }}
                  items={[
                    {
                      id: 'dashboard1',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/dashboard',
                    },
                    {
                      id: 'home2',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/home',
                    },
                    {
                      id: 'add3',
                      type: 'section',
                      text: 'Navigation link',
                      href: '/add1',
                      items: [
                        {
                          id: 'dashboard4',
                          type: 'link',
                          text: 'Monitoring (ConMon)',
                          href: 'https://google.com',
                          external: true,
                        },
                        {
                          id: 'home5',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/home1',
                        },
                      ],
                    },
                    {
                      id: 'add6',
                      type: 'section',
                      text: 'Navigation link',
                      href: '/add2',
                      items: [
                        {
                          id: 'dashboard7',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/dashboard2',
                        },
                        {
                          id: 'home8',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/home2',
                        },
                      ],
                    },
                    {
                      id: 'd1',
                      type: 'divider',
                    },
                    {
                      id: 'link1',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/1',
                    },
                    {
                      id: 'link2',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/2',
                    },
                    {
                      id: 'link3',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/3',
                    },
                    {
                      id: 'link4',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/route/4',
                    },
                  ]}
                />
              }
              content={
                <Table
                  {...collectionProps}
                  selectionType="multi"
                  variant="full-page"
                  header={
                    <Header
                      variant="h1"
                      title="Packages"
                      // description="A list of all authorization packages within the FedRAMP Automation ecosystem"
                      count={`(${pkgs.length})`}
                      actions={
                        <SpaceBetween direction="horizontal" size="xs">
                          <Button
                            disabled
                            color="secondary"
                            text="View details"
                          />
                          <Button disabled color="secondary" text="Edit" />
                          <Button disabled color="secondary" text="Delete" />
                          <Button text="Create package" />
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
                            return {
                              ...prevState,
                              filteringText: e.target.value,
                            };
                          })
                        }
                      />
                      <SelectFilter>
                        <FormField label="Package status">
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
                  columns={columns}
                  data={pkgs}
                  wrapLines={false}
                  pagination={{ pageSize: 20, pageIndex: 0 }}
                  preferences={<Preferences />}
                />
              }
              tools={activeTool}
              toolsOpen={toolsOpen}
              onToolsChange={setToolsOpen}
            />
          }
        />
      </Route>
    </Routes>
  );
};
FullPageTable.args = {
  data: pkgs,
};

FullPageTable.parameters = {
  layout: 'none',
};
