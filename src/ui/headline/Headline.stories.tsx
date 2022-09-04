import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/constant/storybook';

import { Headline, HeadlineArrows } from '.';

export default {
  title: 'UI/Headline',
  component: Headline,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof Headline>;

const TemplateAll: ComponentStory<typeof Headline> = () => (
  <StoryContainer>
    <StoryList>
      <Story title='with title'>
        <Headline title='Headline' />
      </Story>

      <Story title='with title & subtitle'>
        <Headline title='Headline' subtitle='Subtitle' />
      </Story>

      <Story title='with title, subtitle & link'>
        <Headline
          title='Headline'
          subtitle='Subtitle'
          link={{ href: '/', title: 'title' }}
        />
      </Story>

      <Story title='with title, subtitle, link & noArrow'>
        <Headline
          title='Headline'
          link={{ href: '/', title: 'title' }}
          noArrow
        />
      </Story>

      <h2>unusual variants</h2>
      <Story title='with title and noArrow'>
        <Headline title='Headline' noArrow />
      </Story>
    </StoryList>
  </StoryContainer>
);

const TemplateDefault: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
);

const TemplateArrows: ComponentStory<typeof HeadlineArrows> = () => (
  <HeadlineArrows />
);

export const All = TemplateAll.bind({});
All.parameters = {
  layout: 'fullscreen',
};
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
export const Default = TemplateDefault.bind({});
Default.args = {
  title: 'Headline',
  subtitle: 'Subtitle',
};
export const Arrows = TemplateArrows.bind({});
