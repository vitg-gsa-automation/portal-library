import { Story } from '@storybook/react';
import React from 'react';
import { Package } from 'types';
import {
  Button,
  DropdownButton,
  Link,
  PageHeader,
  Tab,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../components';
import {
  Card,
  CardContent,
  CardFooter,
  ColumnLayout,
  ContentLayout,
  Header,
  Property,
  SpaceBetween,
  TableProps,
} from '../layouts';

export default {
  title: 'ContentLayout',
  component: ContentLayout,
};

export const Default: Story<TableProps<Package>> = (args) => {
  return (
    <ContentLayout
      {...args}
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
          footer={<CardFooter>View more</CardFooter>}
        >
          <CardContent>
            <ColumnLayout columns={3}>
              <SpaceBetween>
                <Property label="Name">AwesomeClouSSP1</Property>
                <Property label="Description">System Security Plan</Property>
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
      </SpaceBetween>
    </ContentLayout>
  );
};

Default.args = {};
