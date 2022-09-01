import { OrderState } from '@/contexts/order';

export const onClick = (
  title: string,
  choices: any,
  setOrderItem: OrderState['setOrderItem'],
  setActive: React.Dispatch<React.SetStateAction<string>>,
  isActive: string,
  dishId: number,
  name: string
) => {
  if (choices) {
    setActive(title);
  } else {
    setActive(title === isActive ? '' : title);
  }

  setOrderItem((current: any) => {
    const currentOption = current.options;
    const newOption = currentOption.filter(
      (option: { name: string }) => option.name !== name
    );

    const newOrderItem = { ...current };
    newOrderItem.dishId = dishId;

    if (choices) {
      newOrderItem.options = [...newOption, { name: name, choice: title }];
    } else {
      newOrderItem.options =
        title === isActive ? [...newOption] : [...newOption, { name }];
    }
    return newOrderItem;
  });
};
