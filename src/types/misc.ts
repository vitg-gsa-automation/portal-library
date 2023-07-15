import { ReactNode } from 'react';

export interface Option {
  ID: number;
  NAME: string;
}

export type NotificationType = 'info' | 'warning' | 'success' | 'error';

export interface Notification {
  id: any;
  type: NotificationType;
  header?: ReactNode;
  content?: ReactNode;
  action?: ReactNode;
  dismissable?: boolean;
  loading?: boolean;
  onDismiss: (index: number) => any;
}

export enum StatusType {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
  Error = 'error',
  Pending = 'pending',
  InProgress = 'in-progress',
  Loading = 'loading',
}
