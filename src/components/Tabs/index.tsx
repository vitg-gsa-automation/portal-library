import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import styles from './index.module.scss';

interface TabsListProps extends TabsPrimitive.TabsListProps {}
interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.List {...props} ref={forwardedRef} className={styles.root}>
        {children}
      </TabsPrimitive.List>
    );
  }
);

export const Tabs = TabsPrimitive.Root;
export const TabsTrigger = TabsPrimitive.Trigger;
export const TabsContent = TabsPrimitive.Content;

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  ({ title, ...props }, forwardedRef) => {
    return (
      <div className={styles.tab} {...props} ref={forwardedRef}>
        <div className={styles['tab__text']}> {title}</div>
      </div>
    );
  }
);
