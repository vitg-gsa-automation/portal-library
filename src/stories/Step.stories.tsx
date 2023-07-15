import { Story } from '@storybook/react';
import { Step, StepProps } from '../components/Step';
import { Link } from '../components/Link';
import { Accordion } from '../components/Accordion';
import { Card, CardContent, Header } from '../layouts';
import { StatusIndicatorType } from '../components/StatusIndicator';

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
            type={StatusIndicatorType.Warning}
            statusIndicatorText="Concern"
            items={[
              {
                text: 'System Security Plan (SSP)',
                type: StatusIndicatorType.Success,
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 1: Information Security Policies and Procedures',
                type: StatusIndicatorType.Success,
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 2: User Guide',
                type: StatusIndicatorType.Warning,
                statusIndicatorText: 'Concern',
              },
            ]}
          />
          <Step
            value="2"
            text="Security Assessment Plan (SAP)"
            type={StatusIndicatorType.Success}
            statusIndicatorText="Concern"
            items={[
              {
                text: 'System Security Plan (SSP)',
                type: StatusIndicatorType.Success,
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 1: Information Security Policies and Procedures',
                type: StatusIndicatorType.Success,
                statusIndicatorText: 'OK',
                actions: <Link to="#">View</Link>,
              },
              {
                text: 'Att. 2: User Guide',
                type: StatusIndicatorType.Warning,
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
