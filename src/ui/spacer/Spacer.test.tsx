import { render, screen, takeSnapshot } from 'test-utils';

import { Spacer } from '@/ui';

// ** Snapshot ** //

takeSnapshot(<Spacer />);

// ** Default ** //

test('container has html elements', () => {
  render(<Spacer />);
  const element = screen.getByTestId('ui-spacer');
  expect(element).toHaveClass('m-0 flex-shrink-0');
});

test('container with className p-1', () => {
  render(<Spacer className='p-1' />);
  const element = screen.getByTestId('ui-spacer');
  expect(element).toHaveClass('p-1');
  expect(element).toHaveClass('h-[1px]');
});

// ** Props: className with h ** //

test('when h in className do not render h-[1px] ', () => {
  render(<Spacer className='h-1' />);
  const element = screen.getByTestId('ui-spacer');
  expect(element).toHaveClass('m-0 flex-shrink-0 h-1');
  expect(element).not.toHaveClass('h-[1px]');
});

// ** Props: Length & Index ** //

test('container with length and index', () => {
  const { container } = render(<Spacer length={3} index={2} />);
  expect(container).toContainHTML('<div />');
});
