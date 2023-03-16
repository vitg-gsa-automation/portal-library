import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { forwardRef, ReactElement } from 'react';
import styles from './index.module.scss';

export const Accordion = AccordionPrimitive.Root;
export const AccordionHeader = AccordionPrimitive.Header;
export const AccordionTrigger = AccordionPrimitive.Trigger;
export const AccordionContent = AccordionPrimitive.Content;

interface AccordionItemProps extends AccordionPrimitive.AccordionItemProps {
  trigger: ReactElement;
  content?: ReactElement;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ trigger, content, ...props }, forwardedRef) => {
    return (
      <AccordionPrimitive.Item ref={forwardedRef} {...props}>
        <AccordionPrimitive.Trigger asChild>
          {trigger}
        </AccordionPrimitive.Trigger>
        {content && (
          <AccordionPrimitive.Content className={styles.content}>
            {content}
          </AccordionPrimitive.Content>
        )}
      </AccordionPrimitive.Item>
    );
  }
);
