import { render, screen, takeSnapshot } from 'test-utils';

import { Accordion } from '@/ui';

import { mockData } from './data';

// ** Snapshot ** //

takeSnapshot(
  <Accordion
    data={{
      choices: undefined,
      extra: undefined,
      name: '',
    }}
    dishId={1}
  />
);
takeSnapshot(<Accordion data={mockData} dishId={0} />);

// ** Default ** //

test('container has elements', () => {
  render(
    <Accordion
      data={{
        choices: undefined,
        extra: undefined,
        name: '',
      }}
      dishId={0}
    />
  );
  const title = screen.getByText('Choose');
  const subtitle = screen.getByText('Required');
  const closeBtn = screen.getByRole('button', {
    name: 'ui-accordion-btn-close',
  });
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(closeBtn).toBeInTheDocument();
});
