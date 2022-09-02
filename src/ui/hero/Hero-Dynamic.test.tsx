import { render, screen, takeSnapshot } from 'test-utils';

import { HeroDynamic as HeroDynamicDefault } from '@/ui';

// ** Snapshot ** //

const HeroDynamic = ({ children }: any) => (
  <HeroDynamicDefault
    title='testTitle'
    background={{
      color: '',
      desktop: '',
      mobile: '',
    }}
  >
    {children}
  </HeroDynamicDefault>
);

takeSnapshot(<HeroDynamic>test</HeroDynamic>);

// ** Default ** //

test('container has html elements', () => {
  render(<HeroDynamic>test</HeroDynamic>);
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('testTitle');
});
