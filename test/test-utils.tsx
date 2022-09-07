import { ApolloProvider } from '@apollo/client';
import { render as rtlRender } from '@testing-library/react';
import renderer from 'react-test-renderer';

import client from '@/lib/apollo';

import { DeliveryProvider, ModalProvider, OrderProvider } from '@/contexts';

function render(ui: any, options?: any) {
  return rtlRender(ui, { wrapper: AppWrapper, ...options });
}

export function AppWrapper({ children }: any) {
  return (
    <ApolloProvider client={client}>
      <DeliveryProvider>
        <ModalProvider>
          <OrderProvider>{children}</OrderProvider>
        </ModalProvider>
      </DeliveryProvider>
    </ApolloProvider>
  );
}

export const takeSnapshot = (Component: any) => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppWrapper>{Component}</AppWrapper>).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export * from './utils';
export * from '@testing-library/react';
export { render };
