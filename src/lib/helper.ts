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
