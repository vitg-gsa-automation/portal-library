import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Package } from 'types';
import {
  Button,
  DropdownButton,
  Flashbar,
  Link,
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
  const [toolsOpen, setToolsOpen] = useState(false);
  const { notifications, dismiss, publish } = useNotifications();
  useEffect(() => {
    publish([
      {
        id: 2,
        type: 'success',
        content: 'Successfully converted AwesomeCloudSSP1 to aWord file',
        dismissable: true,
        onDismiss: dismiss,
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout navigation={<TopNavigation title="Authorization portal" />} />
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
                      id: 'dashboard',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/dashboard',
                    },
                    {
                      id: 'home',
                      type: 'link',
                      text: 'Navigation link',
                      href: '/home',
                    },
                    {
                      id: 'add',
                      type: 'section',
                      text: 'Navigation link',
                      href: '/add',
                      items: [
                        {
                          id: 'dashboard',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/dashboard',
                        },
                        {
                          id: 'home',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/home',
                        },
                      ],
                    },
                    {
                      id: 'add',
                      type: 'section',
                      text: 'Navigation link',
                      href: '/add',
                      items: [
                        {
                          id: 'dashboard',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/dashboard',
                        },
                        {
                          id: 'home',
                          type: 'link',
                          text: 'Navigation link',
                          href: '/home',
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
                        title="AwesomeCloudSSP1"
                        description="Lorem ipsum dolor sit amet consectetur. Vel ac id aliquam ac ullamcorper in justo vitae."
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
                            onClick={() => setToolsOpen(true)}
                          >
                            Info
                          </Link>
                        }
                      />
                    </PageHeader>
                  }
                >
                  <Card
                    header={
                      <Header
                        variant="h2"
                        title="Document overview"
                        actions={<Button text="Edit" color="secondary" />}
                        description="This is a description to create a system"
                        info={
                          <Link to="#" variant="info">
                            Info
                          </Link>
                        }
                      />
                    }
                    footer="View more"
                  >
                    <CardContent>
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
                  <Tabs defaultValue="1">
                    <TabsList loop={false}>
                      <TabsTrigger value="1" asChild>
                        <Tab title="Packages" />
                      </TabsTrigger>
                      <TabsTrigger value="2" asChild>
                        <Tab title="Properties" />
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="1"></TabsContent>
                  </Tabs>
                  <SpaceBetween>
                    <Card
                      header={
                        <Header
                          variant="h2"
                          title="Document overview"
                          actions={<Button text="Edit" color="secondary" />}
                          description="This is a description to create a system"
                          info={
                            <Link to="#" variant="info">
                              Info
                            </Link>
                          }
                        />
                      }
                      footer="View more"
                    >
                      <CardContent>
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
                    <Card
                      header={
                        <Header
                          variant="h2"
                          title="Document overview"
                          actions={<Button text="Edit" color="secondary" />}
                          description="This is a description to create a system"
                          info={
                            <Link to="#" variant="info">
                              Info
                            </Link>
                          }
                        />
                      }
                      footer="View more"
                    >
                      <CardContent>
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
                    <Card
                      header={
                        <Header
                          variant="h2"
                          title="Document overview"
                          actions={<Button text="Edit" color="secondary" />}
                          description="This is a description to create a system"
                          info={
                            <Link to="#" variant="info">
                              Info
                            </Link>
                          }
                        />
                      }
                      footer="View more"
                    >
                      <CardContent>
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
                  </SpaceBetween>
                </ContentLayout>
              }
              tools={
                <HelpPanel
                  header={{ href: '#', text: 'Help panel' }}
                  content={
                    <p>
                      View your current distributions and related information
                      such as the associated domain names, delivery methods, SSL
                      certificates, and more. To drill down even further into
                      the details, choose the name of an individual
                      distribution.
                    </p>
                  }
                  open={toolsOpen}
                  onOpenChange={setToolsOpen}
                />
              }
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
