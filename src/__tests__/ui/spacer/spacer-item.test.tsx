import { render, takeSnapshot } from 'test-utils';

import { SpacerItem as SpacerItemWrapper } from '@/ui';

const SpacerItem = (props: any) => (
  <SpacerItemWrapper length={2} index={1} {...props}>
    test
  </SpacerItemWrapper>
);

// ** Snapshot ** //

takeSnapshot(<SpacerItem />);

// ** Default - Props: Index & Length ** //

test('do not render when length is one more then index', () => {
  const { container } = render(<SpacerItem />);
  expect(container).toContainHTML('<div />');
});

test('render when length is equal to index', () => {
  const { container } = render(<SpacerItem length={1} index={1} />);
  expect(container).toContainHTML('<div>test</div>');
});

test('render when length is equal to index', () => {
  const { container } = render(<SpacerItem length={1} index={1} />);
  expect(container).toContainHTML('<div>test</div>');
});

//TODO: Test - SpacerItem - more control between length and index
