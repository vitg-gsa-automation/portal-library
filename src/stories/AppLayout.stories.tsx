import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Package } from 'types';
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  ExpandableSection,
  Flashbar,
  Link,
  ListItem,
  PageHeader,
  StatusIndicator,
  Tab,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TopNavigation,
} from '../components';
import { useNotifications } from '../hooks';
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
  TableProps,
} from '../layouts';
import { useTools } from '../hooks/useTools';

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
                userToggle={
                  <Dropdown modal={false}>
                    <DropdownTrigger asChild>
                      <button>Dropdown trigger</button>
                    </DropdownTrigger>
                    <DropdownContent side="bottom" align="end" loop>
                      <DropdownItem textValue="Account">
                        <ListItem>Account</ListItem>
                      </DropdownItem>
                      <DropdownItem textValue="Sign out">
                        <ListItem>Sign out</ListItem>
                      </DropdownItem>
                    </DropdownContent>
                  </Dropdown>
                }
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
                          text: 'Navigation link',
                          href: '/dashboard1',
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
                            <DropdownButton text="Actions" color="secondary">
                              list
                            </DropdownButton>
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
