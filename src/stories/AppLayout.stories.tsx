import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Package } from 'types';
import { Button, PageHeader, TopNavigation } from '../components';
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
  return (
    <Dashboard topNavigation={<TopNavigation />}>
      <AppLayout
        breadcrumbs={<div>breadcrumbs</div>}
        navigation={
          <SideNavigation
            header={{ href: '#', text: 'Service name' }}
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
                  actions={<Button text="Create resource" color="secondary" />}
                />
              </PageHeader>
            }
          >
            <Container>
              <Card
                header={
                  <CardHeader text="This is a descriptive description">
                    Card header
                  </CardHeader>
                }
                footer={<CardFooter>View more</CardFooter>}
              >
                <CardContent>Card content</CardContent>
              </Card>
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
