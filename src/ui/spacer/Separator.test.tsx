import { render, screen, takeSnapshot } from 'test-utils';

import { Separator } from '@/ui';

// ** Snapshot ** //

takeSnapshot(<Separator />);

// ** Default ** //

test('container has html elements', () => {
  render(<Separator />);
  const hr = screen.getByTestId('ui-separator');
  expect(hr).toHaveClass('h-[1px] bg-[#e2e2e2] border-none m-[32px_0]');
});

// ** Props ** //

describe('props', () => {
  test('top', () => {
    render(<Separator top />);
    const hr = screen.getByTestId('ui-separator');
    expect(hr).toHaveClass('h-[1px] bg-[#e2e2e2] m-[32px_0_0]');
  });
  test('mobile', () => {
    render(<Separator mobile />);
    const hr = screen.getByTestId('ui-separator');
    expect(hr).toHaveClass(
      'h-[1px] bg-[#e2e2e2] border-none hidden md:block m-[32px_0]'
    );
  });
  test('mobile-space', () => {
    render(<Separator mobileSpace />);
    const hr = screen.getByTestId('ui-separator');
    expect(hr).toHaveClass(
      'h-[1px] bg-[#e2e2e2] border-none sm:my-4 sm:bg-[transparent] m-[32px_0]'
    );
  });
  test('all', () => {
    render(<Separator mobileSpace top mobile />);
    const hr = screen.getByTestId('ui-separator');
    expect(hr).toHaveClass(
      'h-[1px] bg-[#e2e2e2] hidden md:block sm:my-4 sm:bg-[transparent] m-[32px_0_0]'
    );
  });
});
