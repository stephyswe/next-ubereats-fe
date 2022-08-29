type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
// !STARTERCONF This OG is generated from https://github.com/theodorusclarence/og
// Please clone them and self-host if your site is going to be visited by many people.
// Then change the url and the default logo.
export function openGraph({
  siteName,
  templateTitle,
  description,
  // !STARTERCONF Or, you can use my server with your own logo.
  logo = 'https://og.<your-domain>/images/logo.jpg',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.<your-domain>/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}

// base functions

export function capitalize([first, ...rest]: any) {
  return first.toUpperCase() + rest.join('').toLowerCase();
}

export function capitalizeSentence(str: string) {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
}

export function addLineBetween(str: any) {
  return str.replaceAll(' ', '-');
}

// low-level functions

export function capitalizeCity(label: string) {
  return capitalize(label.substr(0, label.indexOf('-')));
}

export function titleCaseDefault(str: string) {
  str = addLineBetween(str);
  return capitalizeSentence(str);
}

export function titleCase(str: string) {
  str = addLineBetween(str);
  str = str.toLowerCase().replace(/\b\w/g, (s: any) => s.toUpperCase());
  return str.replace(' And ', ' and ');
}

export function titleCaseFull(str: string, city: string) {
  str = titleCase(str);
  return str + ` Delivery in ${city}`;
}

export function breadCrumbGenerate(label: any, sublabel = null) {
  const city = capitalize(label.substr(0, label.indexOf('-')));
  const region = titleCaseDefault(label.split('-').slice(1).join('-'));
  const newRegion = label.substring(label.indexOf('-') + 1);

  const newCountryArray = [{ title: 'Sweden', link: '/' }];
  newCountryArray.push({ title: region, link: `/client/region/${newRegion}` });
  newCountryArray.push({ title: city, link: `/client/city/${label}` });

  if (sublabel) {
    newCountryArray.push({
      title: titleCase(sublabel),
      link: `/category/${label}/${sublabel}`,
    });
  }

  return newCountryArray;
}

export function citiesInRegion(region: string) {
  switch (region) {
    case 'stockholm':
      return citiesGenerate(['danderyd', 'nacka', 'stockholm'], 'city', region);

    case 'skåne':
      return citiesGenerate(['helsingborg', 'lund', 'malmö'], 'city', region);

    case 'västra-götaland':
      return citiesGenerate(['göteborg'], 'city', region);

    default:
      return citiesGenerate(['stockholm'], 'city', region);
  }
}

export function nearbyRegions(region: string) {
  switch (region) {
    case 'skåne':
      return citiesGenerate(
        ['västra götaland', 'östergötland', 'uppsala'],
        'region'
      );

    case 'västra-götaland':
      return citiesGenerate(['skåne', 'östergötland'], 'region');

    default:
      return citiesGenerate(['skåne'], 'region');
  }
}

export function citiesGenerate(
  cityArray: any,
  type: 'city' | 'region' = 'city',
  region?: any
) {
  const cities: { title: any; link: string }[] = [];
  cityArray.forEach((city: any) => {
    cities.push({
      title: capitalizeSentence(city),
      link: `/client/${type}/${
        region ? `${city}-${region}` : addLineBetween(city)
      }`,
    });
  });
  return cities;
}

export const saveLabel = (label: string) =>
  label.substring(label.indexOf('-') + 1);

export const groupBy = (array: any, key: any) => {
  return array.reduce((result: any, currentValue: any) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};
