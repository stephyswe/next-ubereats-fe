import { render, screen, takeSnapshot } from 'test-utils';

import { CountryWithMapList } from '@/pages/_app/country';
import { HomeData } from '@/pages/_app/home.data';

const defaultData: any[] = [];

// ** Snapshot ** //

takeSnapshot(<CountryWithMapList data={defaultData} />);
takeSnapshot(<CountryWithMapList data={HomeData.countryData.cities} />);

// ** Default ** //

test('container has elements', () => {
  render(<CountryWithMapList data={defaultData} />);
  const element = screen.getByTestId('ui-country-with-map-list');
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass(
    'mt-6 mb-4 grid grid-cols-2 gap-6 md:mb-0 md:grid-cols-4'
  );
});

// ** Props - Item - Data ** //

describe('props', () => {
  test('data', () => {
    const cities = HomeData.countryData.cities;

    render(<CountryWithMapList data={cities} />);

    // length of links
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(cities.length);

    // text and link in list item
    expect(links[0]).toHaveTextContent(cities[0].city);
    expect(links[0]).toHaveAttribute('href', cities[0].link);
  });
});

//TODO: add more tests for this component
