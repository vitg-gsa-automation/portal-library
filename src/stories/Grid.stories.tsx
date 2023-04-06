import { Story } from '@storybook/react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Grid,
  GridProps,
} from '../layouts';

export default {
  title: 'Grid',
  component: Grid,
};

export const Default: Story<GridProps> = (args) => {
  return (
    <Grid
      gridDefinition={[
        {
          colspan: 12,
        },
        { colspan: 4 },
        { colspan: 8 },
        { colspan: 12 },
      ]}
    >
      <Card
        header={
          <CardHeader>
            <CardTitle text="colspan-12" />
          </CardHeader>
        }
      >
        <CardContent>colspan-12</CardContent>
      </Card>
      <Card
        header={
          <CardHeader>
            <CardTitle text="colspan-4" />
          </CardHeader>
        }
      >
        <CardContent>colspan-4</CardContent>
      </Card>
      <Card
        header={
          <CardHeader>
            <CardTitle text="colspan-8" />
          </CardHeader>
        }
      >
        <CardContent>colspan-8</CardContent>
      </Card>
      <Card
        header={
          <CardHeader>
            <CardTitle text="colspan-12" />
          </CardHeader>
        }
      >
        <CardContent>colspan-12</CardContent>
      </Card>
    </Grid>
  );
};
