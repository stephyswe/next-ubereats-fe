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
      placeholder: 'Ange leveransadress',
    },
  },
  employmentData: [
    {
      title: 'Erbjud mat till dina medarbetare',
      desc: 'Skapa ett företagskonto',
      src: '/images/home/employment-1.png',
      link: '/temp/employmentLink1',
    },
    {
      title: 'Din restaurang, levererad',
      desc: 'Lägg till din restaurang',
      src: '/images/home/employment-2.png',
      link: '/temp/employmentLink2',
    },
    {
      title: 'Leverera med Uber Eats',
      desc: 'Registera dig för att leverera',
      src: '/images/home/employment-3.png',
      link: '/temp/employmentLink3',
    },
  ],
  countrySelected: {
    title: 'Städer nära mig',
    link: { title: 'Visa alla 500+ städer', href: '/se/location' },
    mapCenter: { lat: 57.70887, lng: 13.86866 },
    cities: [
      {
        city: 'Göteborg',
        link: '/client/city/',
        position: {
          lat: 57.90887,
          lng: 11.69866,
        },
      },
      {
        city: 'Malmö',
        link: '/client/city/',
        position: {
          lat: 55.81887,
          lng: 12.56866,
        },
      },
      {
        city: 'Stockholm',
        link: '/client/city/',
        position: {
          lat: 59.51887,
          lng: 17.76866,
        },
      },
    ],
  },
  countryList: {
    title: 'Länder med Uber Eats',
    countries: [
      'USA',
      'Spanien',
      'Brasilien',
      'Mexico',
      'Frankrike',
      'Japan',
      'Kanada',
      'Australien',
      'Polen',
      'Storbritannien',
      'Italien',
      'Portugal',
      'Schweiz',
      'Chile',
      'Nya Zeeland',
      'Taiwan',
      'Sydafrika',
      'Belgien',
      'Ecuador',
      'Irland',
      'Sri Lanka',
      'Sverige',
      'Guatemala',
      'Costa Rica',
    ],
  },
};
