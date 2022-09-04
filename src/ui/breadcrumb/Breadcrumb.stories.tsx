import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/constant/storybook';
import { defaultData, noData, OneLevel, TwoLevel } from '@/ui/breadcrumb/data';

import { Breadcrumb } from '.';

export default {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Breadcrumb>;

const TemplateAll: ComponentStory<typeof Breadcrumb> = () => (
  <StoryContainer>
    <StoryList>
      <Story title='3 level'>
        <Breadcrumb data={defaultData} />
      </Story>
      <Story title='2 level'>
        <Breadcrumb data={TwoLevel} />
      </Story>
      <Story title='1 level'>
        <Breadcrumb data={OneLevel} />
      </Story>
      <Story title='no data'>
        <Breadcrumb data={noData} />
      </Story>
    </StoryList>
  </StoryContainer>
);

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
