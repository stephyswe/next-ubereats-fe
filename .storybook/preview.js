import { AppWrapper } from 'test-utils';

import '@/styles/globals.scss';
import '@/styles/uber.css';
import '@/styles/fonts.css';
import '@/styles/map-pickup-elements.css';
import '@/styles/map-pickup-styles.css';

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
