import { render, screen } from '@testing-library/react';

import { DeliveryProvider } from '@/contexts/delivery';
import HomePage from '@/pages/index';

const Home = () => (
  <DeliveryProvider>
    <HomePage />
  </DeliveryProvider>
);

/** Initials */

/** Data */

/** Content - Component - Hero */

/** Heading */

test('page has correct heading', () => {
  render(<Home />);
  const heading = screen.getByRole('heading', {
    name: 'Order food to your door',
  });
  expect(heading).toBeInTheDocument();
});

/** Image */

test('page has correct image', () => {
  render(<Home />);
  const image = screen.getByTestId('hero-background');
  expect(image).toBeInTheDocument();
});
