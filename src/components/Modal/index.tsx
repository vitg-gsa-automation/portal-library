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
import clsx from 'clsx';

export interface ModalProps {
  size?: 'small' | 'medium' | 'large' | 'max';
  trigger?: ReactElement;
  header?: ReactNode;
  footer?: ReactNode;
  visuallyHiddenDescription?: string;
  disablePaddings?: boolean;
  children: ReactNode;
}
export function Modal({
  size = 'medium',
  trigger,
  header,
  footer,
  visuallyHiddenDescription,
  disablePaddings,
  children,
}: ModalProps) {
  const paddingsDisabled = !!disablePaddings;
  const hasFooter = !!footer;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay className={styles.overlay} />
        <DialogContent className={clsx(styles.content, styles[size])}>
          <VisuallyHidden asChild>
            <DialogDescription>{visuallyHiddenDescription}</DialogDescription>
          </VisuallyHidden>
          <Card
            header={
              typeof header === 'string' ? (
                <Header
                  variant="h2"
                  title={header}
                  actions={
                    <DialogClose>
                      <MaterialIcon icon="close" />
                    </DialogClose>
                  }
                />
              ) : (
                header
              )
            }
            footer={footer}
          >
            <div
              className={clsx(styles.children, {
                [styles['paddings-disabled']]: paddingsDisabled,
                [styles['has-footer']]: hasFooter,
              })}
            >
              {children}
            </div>
          </Card>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
