export const HomeData = {
  hero: {
    background: {
      color: '#f2ca2f',
      desktop: '/images/home/hero.png',
      mobile: 'images/home/hero-mobile.png',
    },
    toggle: ['Delivey', 'Pickup'],
    title: 'Order food to your door',
    buttonText: 'Find Food',
    link: {
      href: '/auth/login',
      linkTitle: 'Sign in',
      linkSubtitle: 'for your recent addresses',
    },
    inputPlaceholder: 'Enter delivery address',
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
  countryData: {
    title: 'Cities near me',
    link: { title: 'View all +500 cities', href: '/se/location' },
    mapCenter: { lat: 57.527, lng: 15.03 },
    cities: [
      {
        city: 'Gothenburg',
        link: '/client/city/g%C3%B6teborg-v%C3%A4stra-g%C3%B6taland',
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
  countriesData: {
    title: 'Countries with Uber Eats',
    countries: [
      'United States',
      'Canada',
      'Switzerland',
      'Ecuador',
      'Spain',
      'Australia',
      'Chile',
      'Ireland',
      'Brazil',
      'Poland',
      'New Zeeland',
      'Sri Lanka',
      'Mexico',
      'United Kingdom',
      'Taiwan (ROC)',
      'Sweden',
      'France',
      'Italy',
      'South Africa',
      'Guatemala',
      'Japan',
      'Portugal',
      'Belgium',
      'Costa Rica',
    ],
  },
};
