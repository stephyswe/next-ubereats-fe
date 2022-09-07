import { render, renderMobile, screen, takeSnapshot } from 'test-utils';

import { NavHeader } from '@/layout/nav/header';

function RenderHeader(props: any) {
  return (
    <NavHeader onSidebar={jest.fn()} change={false} home={false} {...props} />
  );
}

// ** Snapshot ** //
takeSnapshot(<RenderHeader />);

// ** Desktop Size ** //

test('has nav button component', () => {
  render(<RenderHeader />);
  const navBtn = screen.getByRole('button', { name: 'nav-btn' });
  expect(navBtn).toBeInTheDocument();
});

test('has link component', () => {
  render(<RenderHeader />);
  const link = screen.getByRole('link', { name: 'uber-home-link' });
  expect(link).toBeInTheDocument();
});

test('has logo component', () => {
  render(<RenderHeader />);
  const logo = screen.getByRole('img', { name: 'uber-logo' });
  expect(logo).toBeInTheDocument();
});

// ** Mobile Size ** //

// ** Mobile Size ** - Change True //

test('on mobile - has no logo component', () => {
  renderMobile(<RenderHeader change={true} />);
  expect(screen.queryByTestId('ui-logo')).not.toBeInTheDocument();
});

test('on mobile - has content', () => {
  const { container } = renderMobile(
    <RenderHeader home={true} change={true} />
  );
  expect(container).toContainHTML(
    '<div><header><div class="h-0"><div class="fixed top-0 left-0 z-30 w-full "><div class="relative"><div class="right-0 left-0 top-0 m-auto box-border flex h-[96px] items-center justify-between px-4 text-black transition-bg-ease-200 md:min-w-[1024px] md:px-10 absolute z-10 bg-white box-shadow-rgb-gray" /></div></div></div></header></div>'
  );
});

// ** Desktop Size - Spacer conditional ** //

test('on desktop - has two spacer item', () => {
  render(<RenderHeader />);
  const spacer = screen.getAllByTestId('ui-spacer');
  expect(spacer).toHaveLength(2);
});

// ** Mobile Size - Spacer conditional ** //

// TODO:
