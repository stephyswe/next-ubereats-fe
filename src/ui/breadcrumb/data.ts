import { BreadcrumbItemProps } from '@/ui/breadcrumb';

const defaultData: BreadcrumbItemProps[] = [
  {
    title: 'Country',
    link: '/',
  },
  {
    title: 'Region',
    link: '/region',
  },
  {
    title: 'City',
    link: '/city',
  },
];

const noData: BreadcrumbItemProps[] = [];

const TwoLevel: BreadcrumbItemProps[] = [
  {
    title: 'Country',
    link: '/',
  },
  {
    title: 'Region',
    link: '/region',
  },
];

const OneLevel: BreadcrumbItemProps[] = [
  {
    title: 'Country',
    link: '/',
  },
];

export { defaultData, noData, OneLevel, TwoLevel };
