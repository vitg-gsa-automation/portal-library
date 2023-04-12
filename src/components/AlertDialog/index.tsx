import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '../Button';
import { Card, CardContent, CardFooter, CardTitle } from '../../layouts/Card';
import { FormActions } from '../../layouts/FormActions';
import { ReactNode } from 'react';

import styles from './index.module.scss';
import { Header } from '../../layouts';

export interface AlertDialogProps
  extends AlertDialogPrimitive.AlertDialogProps {
  title: string;
  description: string;
  trigger: ReactNode;
  action: ReactNode;
  children: ReactNode;
}

export function AlertDialog({
  title,
  description,
  trigger,
  action,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      <AlertDialogPrimitive.Trigger asChild>
        {trigger}
      </AlertDialogPrimitive.Trigger>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className={styles.overlay} />
        <AlertDialogPrimitive.Content className={styles.content}>
          <Card
            header={<Header title={title} variant="h2" />}
            footer={
              <CardFooter>
                <FormActions>
                  <AlertDialogPrimitive.Cancel asChild>
                    <Button text="Cancel" color="secondary" />
                  </AlertDialogPrimitive.Cancel>
                  {action}
                </FormActions>
              </CardFooter>
            }
          >
            <CardContent>
              <VisuallyHidden asChild>
                <AlertDialogPrimitive.Description
                  className={styles.description}
                >
                  {description}
                </AlertDialogPrimitive.Description>
              </VisuallyHidden>
              {children}
            </CardContent>
          </Card>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
