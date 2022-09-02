import { render, screen, takeSnapshot } from 'test-utils';

import { EmploymentList } from '@/components/pages';

import { HomeData } from '@/constant/pages/home.data';

// ** Snapshot ** //

takeSnapshot(<EmploymentList data={[]} />);
takeSnapshot(<EmploymentList data={[HomeData.employmentData[0]]} />);

// ** Default ** //

test('container has elements', () => {
  render(<EmploymentList data={[]} />);
  const list = screen.getByTestId('ui-employment-list');
  expect(list).toHaveClass(
    'mx-[-12px] mb-[-24px] box-border flex flex-wrap md:flex-nowrap'
  );
});

// ** Props - Item - Data ** //

describe('props', () => {
  test('data', () => {
    const dataItem = HomeData.employmentData[0];
    render(<EmploymentList data={[HomeData.employmentData[0]]} />);

    expect(screen.getByText(dataItem.title)).toBeInTheDocument();
    expect(screen.getByText(dataItem.desc)).toBeInTheDocument();

    const element = screen.getByRole('link', { name: 'employment-link' });
    expect(element).toHaveAttribute('href', dataItem.link);

    const image = screen.getByRole('img', { name: dataItem.title });
    expect(image).toHaveAttribute('alt', dataItem.title);
  });
});

//TODO: add more tests for this component
