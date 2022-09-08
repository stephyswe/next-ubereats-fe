import { ComponentMeta, ComponentStory } from '@storybook/react';

import { storePageData } from '@/pages/client/store/[label]/store.data';
import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';

import { HeroSmall } from '.';

export default {
  title: 'UI/Hero/Small',
  component: HeroSmall,
  parameters: componentParameter(),
} as ComponentMeta<typeof HeroSmall>;

const TemplateAll: ComponentStory<typeof HeroSmall> = () => (
  <StoryContainer>
    <StoryList>
      <Story title='default'>
        <HeroSmall image={storePageData.image} overlay={false} />
      </Story>
      <Story title='no data'>
        <HeroSmall image='' overlay={false} />
      </Story>
    </StoryList>
  </StoryContainer>
);

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
