import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';

import { AsideList } from '.';

export default {
  title: 'UI/Aside',
  component: AsideList,
  parameters: componentParameter(),
} as ComponentMeta<typeof AsideList>;

const TemplateAll: ComponentStory<typeof AsideList> = () => (
  <StoryContainer>
    <StoryList className='md:grid-cols-2'>
      <Story title='default'>
        <AsideList data={['Pizza', 'Sallader']} />
      </Story>
      <Story title='no data'>
        <AsideList data={[]} />
      </Story>
    </StoryList>
  </StoryContainer>
);

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
