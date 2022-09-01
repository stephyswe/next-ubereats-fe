import { render, screen } from 'test-utils';

import DogPage from '@/pages/client/dog';

it('should render dog', async () => {
  render(<DogPage name='Buck' />);
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Buck is a poodle')).toBeInTheDocument();
});
