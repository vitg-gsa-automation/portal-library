import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import React, { useEffect } from 'react';
import { Package } from 'types';
import {
  Alert,
  Button,
  DropdownButton,
  Flashbar,
  Link,
  PageHeader,
  Tab,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TopNavigation,
} from '../components';
import {
  AppLayout,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Container,
  Dashboard,
  Header,
  ContentLayout,
  SideNavigation,
  TableProps,
  HelpPanel,
  CardTitle,
  ColumnLayout,
  SpaceBetween,
  Property,
} from '../layouts';
import { useNotifications } from '../hooks';

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
  useEffect(() => {
    publish([
      {
        id: 1,
        type: 'info',
        content: 'Converting AwesomeCloudSSP1 to Word file',
        dismissable: true,
        onDismiss: dismiss,
        loading: true,
      },
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
    <Dashboard topNavigation={<TopNavigation title="Authorization portal" />}>
      <AppLayout
        {...args}
        breadcrumbs={<div>breadcrumbs</div>}
        notifications={
          notifications.length ? <Flashbar items={notifications} /> : undefined
        }
        navigation={
          <SideNavigation
            header={{ href: '#', text: 'Authorizations' }}
            items={[
              {
                id: 'dashboard',
                type: 'link',
                text: 'Navigation link',
                icon: 'dashboard',
                href: '/dashboard',
              },
              {
                id: 'home',
                type: 'link',
                text: 'Navigation link',
                icon: 'home',
                href: '/home',
              },
              {
                id: 'add',
                type: 'section',
                text: 'Navigation link',
                icon: 'add',
                href: '/add',
                items: [
                  {
                    id: 'dashboard',
                    type: 'link',
                    text: 'Navigation link',
                    icon: 'dashboard',
                    href: '/dashboard',
                  },
                  {
                    id: 'home',
                    type: 'link',
                    text: 'Navigation link',
                    icon: 'home',
                    href: '/home',
                  },
                ],
              },
              {
                id: 'settings',
                type: 'link',
                text: 'Navigation link',
                icon: 'settings',
                href: '/settings',
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
                    <Link to="#" variant="info">
                      Info
                    </Link>
                  }
                />
              </PageHeader>
            }
          >
            <Container>
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
                footer={<CardFooter>View more</CardFooter>}
              >
                <CardContent>
                  <ColumnLayout columns={3}>
                    <SpaceBetween>
                      <Property label="Name">AwesomeClouSSP1</Property>
                      <Property label="Description">
                        System Security Plan
                      </Property>
                      <Property label="Name">AwesomeClouSSP1</Property>
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
            </Container>
          </ContentLayout>
        }
        tools={<HelpPanel header={{ href: '#', text: 'Help panel' }} />}
      />
    </Dashboard>
  );
};
Default.args = {
  data: pkgs,
};

export const NoContentLayout: Story<TableProps<Package>> = (args) => {
  return (
    <Dashboard topNavigation={<TopNavigation title="Authorization portal" />}>
      <AppLayout
        {...args}
        disableBackground
        navigation={
          <SideNavigation
            header={{ href: '#', text: 'Home' }}
            items={[
              {
                id: 'dashboard',
                type: 'link',
                text: 'Navigation link',
                icon: 'dashboard',
                href: '/dashboard',
              },
              {
                id: 'home',
                type: 'link',
                text: 'Navigation link',
                icon: 'home',
                href: '/home',
              },
              {
                id: 'add',
                type: 'section',
                text: 'Navigation link',
                icon: 'add',
                href: '/add',
                items: [
                  {
                    id: 'dashboard',
                    type: 'link',
                    text: 'Navigation link',
                    icon: 'dashboard',
                    href: '/dashboard',
                  },
                  {
                    id: 'home',
                    type: 'link',
                    text: 'Navigation link',
                    icon: 'home',
                    href: '/home',
                  },
                ],
              },
              {
                id: 'settings',
                type: 'link',
                text: 'Navigation link',
                icon: 'settings',
                href: '/settings',
              },
            ]}
          />
        }
        content={<div>No Content Layout</div>}
        tools={<HelpPanel header={{ href: '#', text: 'Help panel' }} />}
      />
    </Dashboard>
  );
};
