import { Story } from '@storybook/react';
import { Button } from '../components';
import { Modal } from '../components/Modal';
import { CardContent, SpaceBetween } from '../layouts';
import { Box } from '../layouts/Box';

export default {
  title: 'Modal',
  component: Modal,
};

export const Default: Story = (args) => {
  return (
    <Modal
      header="Modal title"
      trigger={<Button text="View" color="secondary" />}
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button text="Cancel" color="secondary" />
            <Button text="Save" />
          </SpaceBetween>
        </Box>
      }
      {...args}
    >
      content
    </Modal>
  );
};

Default.args = {};
export const WithScrollableContent: Story = (args) => {
  return (
    <Modal
      header="Modal title"
      trigger={<Button text="View" color="secondary" />}
      footer={
        <Box float="right">
          <SpaceBetween direction="horizontal" size="xs">
            <Button text="Cancel" color="secondary" />
            <Button text="Save" />
          </SpaceBetween>
        </Box>
      }
      {...args}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
      pretium odio, sit amet varius enim. Nulla non ultrices risus. Pellentesque
      in lacinia elit, eu ultricies magna. Integer maximus, massa nec accumsan
      bibendum, ex mi gravida enim, non convallis odio est eget ante. Donec vel
      massa arcu. Nam erat lacus, condimentum vel pharetra venenatis, cursus
      eget augue. Proin gravida sapien ac faucibus molestie. Sed nec pharetra
      est. Aenean ullamcorper metus nisi, ut semper orci porttitor vitae.
      Aliquam et lobortis odio, ac hendrerit mauris. Nunc et vestibulum turpis,
      vitae suscipit velit. In quis velit quis leo maximus mattis nec ipsum a
      imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse ac pretium odio, sit amet varius enim. Nulla non ultrices
      risus. Pellentesque in lacinia elit, eu ultricies magna. Integer maximus,
      massa nec accumsan bibendum, ex mi gravida enim, non convallis odio est
      eget ante. Donec vel massa arcu. Nam erat lacus, condimentum vel pharetra
      venenatis, cursus eget augue. Proin gravida sapien ac faucibus molestie.
      Sed nec pharetra est. Aenean ullamcorper metus nisi, ut semper orci
      porttitor vitae. Aliquam et lobortis odio, ac hendrerit mauris. Nunc et
      vestibulum turpis, vitae suscipit velit. In quis velit quis leo maximus
      ullamcorper non ut justo. Sed nisi ex, facilisis vitae augue vel, auctor
      hendrerit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum at felis condimentum, blandit eros et, faucibus lacus. Donec
      mattis nec ipsum a imperdiet. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse ac pretium odio, sit amet varius enim. Nulla
      non ultrices risus. Pellentesque in lacinia elit, eu ultricies magna.
      Integer maximus, massa nec accumsan bibendum, ex mi gravida enim, non
      convallis odio est eget ante. Donec vel massa arcu. Nam erat lacus,
      condimentum vel pharetra venenatis, cursus eget augue. Proin gravida
      sapien ac faucibus molestie. Sed nec pharetra est. Aenean ullamcorper
      metus nisi, ut semper orci porttitor vitae. Aliquam et lobortis odio, ac
      hendrerit mauris. Nunc et sapien ac faucibus molestie. Sed nec pharetra
      est. Aenean ullamcorper metus nisi, ut semper orci porttitor vitae.
      Aliquam et lobortis odio, ac hendrerit mauris. Nunc et vestibulum turpis,
      vitae suscipit velit. In quis velit quis leo maximus ullamcorper non ut
      justo. Sed nisi ex, facilisis vitae augue vel, auctor hendrerit nisl.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
      felis condimentum, blandit eros et, faucibus lacus. Donec mattis nec ipsum
      a imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse ac pretium odio, sit amet varius enim. Nulla non ultrices
      risus. Pellentesque in lacinia elit, eu ultricies magna. Integer maximus,
      massa nec accumsan bibendum, ex mi gravida enim, non convallis odio est
      eget ante. Donec vel massa arcu. Nam erat lacus, condimentum vel pharetra
      venenatis, cursus eget augue. Proin gravida sapien ac faucibus molestie.
      Sed nec pharetra est. Aenean ullamcorper metus nisi, ut semper orci
      porttitor vitae. Aliquam et lobortis odio, ac hendrerit mauris. Nunc et
      vestibulum turpis, vitae suscipit velit. In quis velit quis leo maximus
      ullamcorper non ut justo. Sed nisi ex, facilisis vitae augue vel, auctor
      hendrerit nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vestibulum at felis condimentum, blandit eros et, faucibus lacus. Donec
      mattis nec ipsum a imperdiet. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse ac pretium odio, sit amet varius enim. Nulla
      non ultrices risus. Pellentesque in lacinia elit, eu ultricies magna.
      Integer maximus, massa nec accumsan bibendum, ex mi gravida enim, non
      convallis odio est eget ante. Donec vel massa arcu. Nam erat lacus,
      condimentum vel pharetra venenatis, cursus eget augue. Proin gravida
      sapien ac faucibus molestie. Sed nec pharetra est. Aenean ullamcorper
      metus nisi, ut semper orci porttitor vitae. Aliquam et lobortis odio, ac
      hendrerit mauris. Nunc et vestibulum turpis, vitae suscipit velit. In quis
      velit quis leo maximus ullamcorper non ut justo. Sed nisi ex, facilisis
      vitae augue vel, auctor hendrerit nisl. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Vestibulum at felis condimentum, blandit eros
      et, faucibus lacus. Donec mattis nec ipsum a imperdiet.
    </Modal>
  );
};
