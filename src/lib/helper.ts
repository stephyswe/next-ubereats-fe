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

export function capitalize([first, ...rest]: any) {
  return first.toUpperCase() + rest.join('').toLowerCase();
}

export function capitalizeCity(label: string) {
  return capitalize(label.substr(0, label.indexOf('-')));
}

export function titleCaseDefault(str: string) {
  str = str.replaceAll('-', ' ');
  str = str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  return str;
}

export function titleCase(str: string) {
  str = str.replaceAll('-', ' ');
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

  const newRegion = label.slice(0, label.lastIndexOf('-'));

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
