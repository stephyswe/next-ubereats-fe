import { ApolloProvider } from '@apollo/client';
import { render as rtlRender } from '@testing-library/react';
import renderer from 'react-test-renderer';

import client from '@/lib/apollo';

import { DeliveryProvider } from '@/contexts/delivery';
import { OrderProvider } from '@/contexts/order';

export * from './utils';

function render(ui: any, options?: any) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

function Wrapper({ children }: any) {
  return (
    <ApolloProvider client={client}>
      <DeliveryProvider>
        <OrderProvider>{children}</OrderProvider>
      </DeliveryProvider>
    </ApolloProvider>
  );
}

export const takeSnapshot = (Component: any) => {
  it('renders correctly', () => {
    const tree = renderer.create(<Wrapper>{Component}</Wrapper>).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

export * from '@testing-library/react';
export { render };
