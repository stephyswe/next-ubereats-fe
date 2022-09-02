import { render, screen, takeSnapshot } from 'test-utils';

import { Logo } from '@/ui';

// ** Snapshot ** //

takeSnapshot(<Logo />);

// ** Default ** //

test('has link component', () => {
  render(<Logo />);
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
});

test('has image component', () => {
  render(<Logo />);
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
});

// ** Content ** //

test('has correct href link to homepage', () => {
  render(<Logo />);
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/');
});

test('has correct image source', () => {
  render(<Logo />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', '/images/logo.svg');
});
