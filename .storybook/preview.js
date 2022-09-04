import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { AppWrapper } from 'test-utils';

import '@/styles/globals.scss';
import '@/styles/uber.css';
import '@/styles/uber-fonts.css';
import '@/ui/maps/pickup/map-pickup-elements.css';
import '@/ui/maps/pickup/map-pickup-styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AppWrapper>
      <Story />
    </AppWrapper>
  ),
];
