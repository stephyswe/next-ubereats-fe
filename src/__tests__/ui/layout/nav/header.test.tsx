import { render, screen } from '@testing-library/react';

import { DeliveryProvider } from '@/contexts/delivery';
import { Navigation } from '@/ui/layout/nav/header';

const NavigationWrapper = () => (
  <DeliveryProvider>
    <Navigation onSidebar={jest.fn()} change={false} />
  </DeliveryProvider>
);

/** Initials */

/** Data */

/** Content - Navbar */

/** Components */

/** Component - Logo */

test('has logo component', () => {
  render(<NavigationWrapper />);
  const logo = screen.getByTestId('ui-logo');
  expect(logo).toBeInTheDocument();
});
