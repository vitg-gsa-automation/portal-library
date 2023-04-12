import { Story } from '@storybook/react';
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTrigger,
  Header,
} from '../layouts';
import { Button, Link } from '../components';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Default: Story = (args) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button text="View" color="secondary" icon="visibility" />
      </DialogTrigger>

      <DialogContent title="OSCAL viewer">
        <Card
          header={
            <Header
              variant="h2"
              info={
                <Link variant="info" to="#">
                  Info
                </Link>
              }
              title="OSCAL viewer"
              actions={<Button text="Highlight" color="secondary" />}
            />
          }
        >
          <CardContent>content</CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
