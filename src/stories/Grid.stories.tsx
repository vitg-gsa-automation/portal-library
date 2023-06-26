import { Story } from '@storybook/react';
import {
  Card,
  CardContent,
  CardHeader,
  Header,
  Grid,
  GridProps,
} from '../layouts';
import { ExpandableSection } from '../components/ExpandableSection';

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
        { colspan: 12 },
      ]}
    >
      <Card header={<Header title="colspan-12" variant="h2" />}>
        <CardContent>colspan-12</CardContent>
      </Card>
      <Card header={<Header title="colspan-4" variant="h2" />}>
        <CardContent>colspan-4</CardContent>
      </Card>
      <Card header={<Header title="colspan-8" variant="h2" />}>
        <CardContent>colspan-8</CardContent>
      </Card>
      <Card header={<Header title="colspan-12" variant="h2" />}>
        <CardContent>colspan-12</CardContent>
      </Card>
      <ExpandableSection variant="card" headerText="colspan-12">
        <CardContent>colspan-12</CardContent>
      </ExpandableSection>
    </Grid>
  );
};
