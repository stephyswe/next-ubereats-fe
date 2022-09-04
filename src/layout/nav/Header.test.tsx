import { render, renderMobile, screen, takeSnapshot } from 'test-utils';

import { Navigation } from '@/ui/layout/nav/header';

// ** Snapshot ** //

takeSnapshot(<Navigation onSidebar={jest.fn()} change={false} />);

// ** Desktop Size ** //

test('has nav button component', () => {
  render(<Navigation onSidebar={jest.fn()} change={false} />);
  const navBtn = screen.getByRole('button', { name: 'nav-btn' });
  expect(navBtn).toBeInTheDocument();
});

test('has link component', () => {
  render(<Navigation onSidebar={jest.fn()} change={false} />);
  const link = screen.getByRole('link', { name: 'uber-home-link' });
  expect(link).toBeInTheDocument();
});

test('has logo component', () => {
  render(<Navigation onSidebar={jest.fn()} change={false} />);
  const logo = screen.getByRole('img', { name: 'uber-logo' });
  expect(logo).toBeInTheDocument();
});

// ** Mobile Size ** //

// ** Mobile Size ** - Change True //

test('on mobile - has no logo component', () => {
  renderMobile(<Navigation onSidebar={jest.fn()} change={true} />);
  expect(screen.queryByTestId('ui-logo')).not.toBeInTheDocument();
});

test('on mobile - has no content', () => {
  const { container } = renderMobile(
    <Navigation onSidebar={jest.fn()} change={true} />
  );
  expect(container).toContainHTML('<div />');
});

// ** Desktop Size - Spacer conditional ** //

test('on desktop - has two spacer item', () => {
  render(<Navigation onSidebar={jest.fn()} change={false} />);
  const spacer = screen.getAllByTestId('ui-spacer');
  expect(spacer).toHaveLength(2);
});

// ** Mobile Size - Spacer conditional ** //

// TODO:
