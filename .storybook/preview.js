import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { AppWrapper } from 'test-utils';

import '@/styles/globals.scss';
import '@/styles/uber.css';
import '@/styles/uber-fonts.css';
import '@/ui/maps/pickup/map-pickup-elements.css';
import '@/ui/maps/pickup/map-pickup-styles.css';

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
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
