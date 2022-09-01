import { DishOptionInputType, Scalars } from '@/__generated__/graphql';

export type AccordionProps = {
  data: DishOptionInputType;
  dishId: Scalars['Int'];
};

export type AccordionTopProps = {
  name: string;
  onToggle: any;
  isOpened: boolean;
};
