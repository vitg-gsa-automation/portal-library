import { Story } from '@storybook/react';
import { Editor, EditorProps } from '../components/Editor';
import { Card, CardContent, Header } from '../layouts';

export default {
  title: 'Editor',
  component: Editor,
};

export const Default: Story<EditorProps> = (args) => {
  return <Editor {...args} />;
};

Default.args = {
  height: '400px',
};
export const InCard: Story<EditorProps> = (args) => {
  return (
    <Card header={<Header variant="h2" title="OSCAL Editor" />}>
      <CardContent>
        <Editor {...args} />
      </CardContent>
    </Card>
  );
};

InCard.args = {
  height: '400px',
};
