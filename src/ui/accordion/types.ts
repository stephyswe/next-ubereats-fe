import { Scalars } from '@/__generated__/graphql';

export type AccordionProps = {
  data: {
    name: string;
    choices: Array<{
      name: string;
      price: Scalars['Float'];
    }>;
    options: Array<{
      name: string;
      price: Scalars['Float'];
    }>;
  };
  dishId: Scalars['Int'];
};

export type RenderTopProps = {
  name: string;
  onToggle: any;
  isOpened: boolean;
};
