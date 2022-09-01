import { render, screen, takeSnapshot } from 'test-utils';

import { CountryWithMap } from '@/components/pages';

import { HomeData } from '@/constant/pages/home.data';

const defaultData = {
  title: '',
  link: {
    href: '/',
    title: '',
  },
  mapCenter: {
    lat: 0,
    lng: 0,
  },
  cities: [],
};

// ** Snapshot ** //

takeSnapshot(<CountryWithMap data={defaultData} />);
takeSnapshot(<CountryWithMap data={HomeData.countryData} />);

// ** Default ** //

test('container has elements', () => {
  render(<CountryWithMap data={defaultData} />);
  const element = screen.getByTestId('ui-country-with-map');
  expect(element).toBeInTheDocument();

  // one text element
  const typography = screen.getByTestId('ui-country-with-map-typography');
  expect(typography).toHaveTextContent(defaultData.title);

  // one link element
  const link = screen.getByTestId('ui-country-with-map-link');
  expect(link).toHaveTextContent(defaultData.link.title);
  expect(link).toHaveAttribute('href', defaultData.link.href);

  // one map element
  expect(screen.getByTestId('ui-map-home')).toBeInTheDocument();

  // one country list element
  expect(screen.getByTestId('ui-country-with-map-list')).toBeInTheDocument();
});

// ** Props - Item - Data ** //

describe('props', () => {
  test('data', () => {
    const { link, title } = HomeData.countryData;

    render(<CountryWithMap data={HomeData.countryData} />);

    // text and link in list
    const typography = screen.getByTestId('ui-country-with-map-typography');
    expect(typography).toHaveTextContent(title);

    // one link element
    const linkEl = screen.getByTestId('ui-country-with-map-link');
    expect(linkEl).toHaveTextContent(link.title);
    expect(linkEl).toHaveAttribute('href', link.href);

    // one map element
    expect(screen.getByTestId('ui-map-home')).toBeInTheDocument();

    // one country list element
    expect(screen.getByTestId('ui-country-with-map-list')).toBeInTheDocument();
  });
});

//TODO: add more tests for this component
