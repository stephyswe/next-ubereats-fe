import { render, screen, takeSnapshot } from 'test-utils';

import { Breadcrumb } from '@/ui';
import { defaultData } from '@/ui/breadcrumb/data';

// ** Snapshot ** //

takeSnapshot(<Breadcrumb data={[]} />);
takeSnapshot(<Breadcrumb data={defaultData} />);

// ** Default ** //

test('container has html elements', () => {
  render(<Breadcrumb data={[]} />);
  const list = screen.getByRole('list', {
    name: 'ui-label-breadcrumb',
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
