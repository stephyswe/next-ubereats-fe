import { render, screen, takeSnapshot } from 'test-utils';

import { Hero as HeroDefault } from '@/ui';

// ** Snapshot ** //

const Hero = ({ children }: any) => (
  <HeroDefault
    title='testTitle'
    background={{
      color: '',
      desktop: '',
      mobile: '',
    }}
  >
    {children}
  </HeroDefault>
);

takeSnapshot(<Hero>test</Hero>);

// ** Default ** //

test('container has html elements', () => {
  render(<Hero>test</Hero>);
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('testTitle');
});
