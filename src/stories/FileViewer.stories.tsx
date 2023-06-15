import { Story } from '@storybook/react';
import { FileViewer, FileViewerProps } from '../components/FileViewer';

export default {
  title: 'FileViewer',
  component: FileViewer,
};

export const Default: Story<FileViewerProps> = (args) => {
  return <FileViewer {...args} />;
};

Default.args = {
  language: 'xml',
  content: `<?xml version="1.0" encoding="UTF-8"?>
  <plan-of-action-and-milestones xmlns:m="http://csrc.nist.gov/ns/oscal/metaschema/1.0"
   xmlns="http://csrc.nist.gov/ns/oscal/1.0"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://csrc.nist.gov/ns/oscal/1.0 https://raw.githubusercontent.com/usnistgov/OSCAL/main/xml/schema/oscal_poam_schema.xsd" uuid="5f7afa40-3d9d-475b-9e34-47a768371be3">
      <metadata>
          <title>AwesomeCloud Plan of Actions and Milestones</title>
          <last-modified>2023-01-12T12:51:55.777232900-05:00</last-modified>
          <version>1.0</version>
          <oscal-version>1.0.4</oscal-version>
      </metadata>
      <import-ssp href="#ee6ad8a1-f345-486d-ad05-34bd78c909c3"/>
      <observation uuid="727fd8c7-8bb6-4e2d-add2-0cd32b022d17">
          <description>
              <p>Examined the AwesomeCloud System Security Plan (SSP) and determined that the inventory of information system components has not been updated within the last 30 days. </p>
          </description>
          <method>Examine</method>
          <collected>2023-01-13T17:41:08.548754400-05:00</collected>
      </observation>
      <risk uuid="0683df1e-880b-469c-a146-2bd8a25019dd">
          <title>Asset Inventory Out of Date</title>
          <description>
              <p>The AwesomeCloud Asset Inventory has not been updated in accordance with the defined FedRAMP frequency (i.e., at least monthly)</p>
          </description>
          <statement>
              <p>Failure to maintain a current inventory of information system components could cause degradation of other security cabalities (e.g. vulnerability management, configutation settings management)</p>
          </statement>
          <status>open</status>
          <characterization>
              <origin>
                  <actor type="party" actor-uuid="0e4cdd8b-b973-49fb-bb67-0f7b90b2ae0d"/>
              </origin>
              <facet name="likelihood" system="https://awesomecloud.com" value="moderate"/>
              <facet name="impact" system="https://awesomecloud.com" value="moderate"/>
          </characterization>
          <related-observation observation-uuid="727fd8c7-8bb6-4e2d-add2-0cd32b022d17"/>
      </risk>
      <poam-item uuid="a908cb44-446a-450d-970d-73c968fd5389">
          <title>Asset Inventory Out of Date</title>
          <description/>        
          <related-observation observation-uuid="727fd8c7-8bb6-4e2d-add2-0cd32b022d17"/>
          <associated-risk risk-uuid="0683df1e-880b-469c-a146-2bd8a25019dd"/>
      </poam-item>
  </plan-of-action-and-milestones>
  `,
};
