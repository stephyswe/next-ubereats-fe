import { render, screen, takeSnapshot } from 'test-utils';

import { BreadCrumb } from '@/ui';

// ** Snapshot ** //

takeSnapshot(<BreadCrumb data={[]} />);

// ** Default ** //

test('container has html elements', () => {
  render(<BreadCrumb data={[]} />);
  const list = screen.getByRole('list', {
    name: 'ui-bc-list',
  });
  expect(list).toBeInTheDocument();
});

// ** Data ** //

test('container with one data item', () => {
  render(<BreadCrumb data={[{ title: 'Home', link: '/' }]} />);
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect('Home').toBe(link.textContent);
  expect('/').toBe(link.getAttribute('href'));
});
