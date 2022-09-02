import { render, screen } from 'test-utils';

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

/* takeSnapshot(<CountryWithMap data={defaultData} />);
takeSnapshot(<CountryWithMap data={HomeData.countryData} />); */

// ** Default ** //

describe('container has elements', () => {
  const { title, link } = defaultData;
  test('container has test id', () => {
    render(<CountryWithMap data={defaultData} />);
    const element = screen.getByTestId('ui-country-with-map');
    expect(element).toBeInTheDocument();
  });

  test('container has typography', () => {
    render(<CountryWithMap data={defaultData} />);
    const typography = screen.getByTestId('component-typography');
    expect(typography).toHaveTextContent(title);
  });

  test('container has link', () => {
    render(<CountryWithMap data={defaultData} />);
    const linkEl = screen.getByTestId('component-link');
    expect(linkEl).toHaveTextContent(link.title);
    expect(linkEl).toHaveAttribute('href', link.href);
  });

  test('container has map element', () => {
    render(<CountryWithMap data={defaultData} />);
    expect(screen.getByTestId('ui-map-home')).toBeInTheDocument();
  });

  test('container has list element', () => {
    render(<CountryWithMap data={defaultData} />);
    expect(screen.getByTestId('ui-country-with-map-list')).toBeInTheDocument();
  });
});

// ** Props - Item - Data ** //

describe('props - data', () => {
  const countryData = HomeData.countryData;
  const { title, link } = countryData;
  test('container has test id', () => {
    render(<CountryWithMap data={countryData} />);
    const element = screen.getByTestId('ui-country-with-map');
    expect(element).toBeInTheDocument();
  });

  test('container has typography', () => {
    render(<CountryWithMap data={countryData} />);
    const typography = screen.getByTestId('component-typography');
    expect(typography).toHaveTextContent(title);
  });

  test('container has link', () => {
    render(<CountryWithMap data={countryData} />);
    const linkEl = screen.getByRole('link', {
      name: link.title,
    });
    expect(linkEl).toHaveTextContent(link.title);
    expect(linkEl).toHaveAttribute('href', link.href);
  });

  test('container has map element', () => {
    render(<CountryWithMap data={countryData} />);
    expect(screen.getByTestId('ui-map-home')).toBeInTheDocument();
  });
  test('container has list element', () => {
    render(<CountryWithMap data={countryData} />);
    expect(screen.getByTestId('ui-country-with-map-list')).toBeInTheDocument();
  });
});

//TODO: add more tests for this component
