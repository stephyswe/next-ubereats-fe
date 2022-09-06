/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect } from 'react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/constant/storybook';
import { useOrders } from '@/contexts';
import { dishData } from '@/pages/client/store/[label]/data';
import { AccordionItem } from '@/ui/accordion/item';

import { Accordion, AccordionTop } from '.';

export default {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: componentParameter(),
} as ComponentMeta<typeof Accordion>;

const TemplateAll: ComponentStory<typeof Accordion> = () => {
  // set data
  const { setOrderItem } = useOrders();

  useEffect(() => {
    setOrderItem({
      dishId: 3,
      price: 115,
      name: 'KycklingSallad',
      options: [],
    });
  }, [setOrderItem]);

  return (
    <StoryContainer>
      <StoryList className='md:grid-cols-2'>
        <Story title='3 level'>
          <Accordion data={dishData.Sallader[1].options[0]} dishId={1} />
        </Story>
        <Story title='3 level'>
          <Accordion data={dishData.Sallader[1].options[1]} dishId={3} />
        </Story>
      </StoryList>
      <StoryList title='Partials' className='md:grid-cols-2'>
        <Story title='top - open'>
          <AccordionTop name='name' onToggle={() => {}} isOpened={true} />
        </Story>
        <Story title='top - closed'>
          <AccordionTop name='name' onToggle={() => {}} isOpened={false} />
        </Story>
        <Story title='item - open'>
          <AccordionItem title='name' isActive={true} />
        </Story>
        <Story title='item - closed'>
          <AccordionItem title='name' isActive={false} />
        </Story>
        <Story title='checkbox - open'>
          <AccordionItem type='checkbox' title='name' isActive={true} />
        </Story>
        <Story title='checkbox - closed'>
          <AccordionItem type='checkbox' title='name' isActive={false} />
        </Story>
      </StoryList>
    </StoryContainer>
  );
};

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
