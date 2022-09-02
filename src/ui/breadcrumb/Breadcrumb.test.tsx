import { render, screen, takeSnapshot } from 'test-utils';

import { Breadcrumb } from '@/ui';

// ** Snapshot ** //

takeSnapshot(<Breadcrumb data={[]} />);

// ** Default ** //

test('container has html elements', () => {
  render(<Breadcrumb data={[]} />);
  const list = screen.getByRole('list', {
    name: 'ui-bc-list',
  });
  expect(list).toBeInTheDocument();
});

// ** Data ** //

test('container with one data item', () => {
  render(<Breadcrumb data={[{ title: 'Home', link: '/' }]} />);
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect('Home').toBe(link.textContent);
  expect('/').toBe(link.getAttribute('href'));
});
