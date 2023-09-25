import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Radio } from '../Radio';
import { SpaceBetween } from '../../layouts/SpaceBetween';

interface RadioButtonDefinition {
  id: any;
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  items?: ReadonlyArray<RadioButtonDefinition>;
  invalid?: boolean;
}

export function RadioGroup({ items, invalid, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root {...props}>
      {items && (
        <SpaceBetween size="xxs">
          {items?.map((item) => {
            return <Radio key={item.id} {...item} />;
          })}
        </SpaceBetween>
      )}
    </RadioGroupPrimitive.Root>
  );
}
