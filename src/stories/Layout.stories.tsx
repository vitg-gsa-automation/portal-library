import { Story } from '@storybook/react';
import { createColumnHelper } from '@tanstack/react-table';
import { PageHeader, TopNavigation } from '../components';
import { Package } from 'types';
import {
  Card,
  CardContent,
  Container,
  Dashboard,
  Header,
  Layout,
  Page,
  SideNavigation,
  TableProps,
} from '../layouts';

export default {
  title: 'Layout',
  component: Layout,
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
      <Layout
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
          <Page
            header={
              <PageHeader>
                <Header title="Packages" />
              </PageHeader>
            }
          >
            <Container>
              <Card>
                <CardContent>Card content</CardContent>
              </Card>
            </Container>
          </Page>
        }
      />
    </Dashboard>
  );
};
Default.args = {
  data: pkgs,
};
