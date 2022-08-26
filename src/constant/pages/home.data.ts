export const HomeData = {
  hero: {
    title: 'Beställ mat direkt till din dörr.',
    src: '/images/home/hero.png',
    toggle: ['Leverans', 'Upphämtning'],
    buttonText: 'Hitta Mat',
    links: {
      link: 'https://www.ubereats.com/',
      title: 'Logga in',
      subtitle: 'for dina senaste adresser',
    },
    input: {
      placeholder: 'Enter delivery address',
    },
  },
  employmentData: [
    {
      title: 'Feed your employees',
      desc: 'Create a business account',
      src: '/images/home/employment-1.png',
      link: '/temp/employmentLink1',
    },
    {
      title: 'Your restaurant, delivered',
      desc: 'Add your restaurant',
      src: '/images/home/employment-2.png',
      link: '/temp/employmentLink2',
    },
    {
      title: 'Deliver with Uber Eats',
      desc: 'Sign up to deliver',
      src: '/images/home/employment-3.png',
      link: '/temp/employmentLink3',
    },
  ],
  countrySelected: {
    title: 'Cities near me',
    link: { title: 'View all +500 cities', href: '/se/location' },
    mapCenter: { lat: 57.527, lng: 15.03 },
    cities: [
      {
        city: 'Gothenburg',
        link: '/client/city/göteborg-västra-götaland',
        position: {
          lat: 57.90887,
          lng: 11.69866,
        },
      },
      {
        city: 'Malmö',
        link: '/client/city/malmö-skåne',
        position: {
          lat: 55.81887,
          lng: 12.56866,
        },
      },
      {
        city: 'Stockholm',
        link: '/client/city/stockholm-stockholm',
        position: {
          lat: 59.51887,
          lng: 17.76866,
        },
      },
    ],
  },
  countryList: {
    title: 'Countries with Uber Eats',
    countries: [
      'United States',
      'Spain',
      'Brazil',
      'Mexico',
      'France',
      'Japan',
      'Canada',
      'Australia',
      'Poland',
      'United Kingdom',
      'Italy',
      'Portugal',
      'Switzerland',
      'Chile',
      'New Zeeland',
      'Taiwan (ROC)',
      'South Africa',
      'Belgium',
      'Ecuador',
      'Ireland',
      'Sri Lanka',
      'Sweden',
      'Guatemala',
      'Costa Rica',
    ],
  },
};
