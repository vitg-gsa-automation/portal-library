import { Story } from '@storybook/react';
import { Step, StepProps } from '../components/Step';
import { Link } from '../components/Link';
import { Accordion } from '../components/Accordion';
import { Card, CardContent, Header } from '../layouts';

export default {
  title: 'Step',
  component: Step,
};

export const Default: Story<StepProps> = (args) => {
  return (
    <Card
      header={
        <Header variant="h2" title="Section B: Documents provided check" />
      }
    >
      <CardContent disableTopPadding>
        <Accordion type="multiple">
          <Step
            value="1"
            text="System Security Plan (SSP)"
            type="warning"
            statusIndicatorText="Concern"
            items={[
              {
                text: 'System Security Plan (SSP)',
                type: 'success',
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 1: Information Security Policies and Procedures',
                type: 'success',
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 2: User Guide',
                type: 'warning',
                statusIndicatorText: 'Concern',
              },
            ]}
          />
          <Step
            value="2"
            text="Security Assessment Plan (SAP)"
            type="warning"
            statusIndicatorText="Concern"
            items={[
              {
                text: 'System Security Plan (SSP)',
                type: 'success',
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 1: Information Security Policies and Procedures',
                type: 'success',
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 2: User Guide',
                type: 'warning',
                statusIndicatorText: 'Concern',
              },
            ]}
          />
        </Accordion>
      </CardContent>
    </Card>
  );
};

Default.args = {};
