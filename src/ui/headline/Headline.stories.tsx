import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import {
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';

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

      <h2>Partial</h2>
      <Story title='arrow'>
        <HeadlineArrows />
      </Story>
    </StoryList>
  </StoryContainer>
);

export const Desktop = TemplateAll.bind({});
Desktop.parameters = { layout: 'fullscreen' };
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
