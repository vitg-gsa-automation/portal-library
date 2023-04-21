import { ReactElement, ReactNode } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import styles from './index.module.scss';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from '../../layouts/Dialog';
import { Card } from '../../layouts/Card';
import { Header } from '../../layouts/Header';
import { MaterialIcon } from '../../components/MaterialIcon';
export interface ModalProps {
  trigger?: ReactElement;
  title?: string;
  footer?: ReactNode;
  visuallyHiddenDescription?: string;
  children: ReactNode;
}
export function Modal({
  trigger,
  title,
  footer,
  visuallyHiddenDescription,
  children,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className={styles.overlay} />
        <DialogContent className={styles.content}>
          <VisuallyHidden asChild>
            <DialogDescription>{visuallyHiddenDescription}</DialogDescription>
          </VisuallyHidden>
          <Card
            header={
              <Header
                variant="h2"
                title={title}
                actions={
                  <DialogClose>
                    <MaterialIcon icon="close" />
                  </DialogClose>
                }
              />
            }
            footer={footer}
          >
            {children}
          </Card>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
