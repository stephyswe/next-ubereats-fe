import { render, screen } from '@testing-library/react';

import { DeliveryProvider } from '@/contexts/delivery';
import { Logo } from '@/ui';

const LogoWrapper = () => (
  <DeliveryProvider>
    <Logo />
  </DeliveryProvider>
);

/** Initials */

test('has link component', () => {
  render(<LogoWrapper />);
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
});

test('has image component', () => {
  render(<LogoWrapper />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});

/** Content */

test('has correct href link to homepage', () => {
  render(<LogoWrapper />);
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/');
});

test('has correct image source', () => {
  render(<LogoWrapper />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', '/images/logo.svg');
});
