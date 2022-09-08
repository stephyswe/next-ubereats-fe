import { SvgAndroid, SvgIphone } from '@/ui/icons';

export const sidebarData = {
  auth: [
    {
      title: 'Sign up',
      link: '/auth/login',
    },
    {
      title: 'Log in',
      link: '/auth/login',
    },
  ],
  link: [
    { title: 'Create a business account', link: 'placeholder' },
    { title: 'Add your restaurant', link: 'placeholder' },
    {
      title: 'Sign up to deliver',
      link: 'placeholder',
    },
  ],
  social: {
    title: `There's more to love in the app.`,
    icon: '/images/logo-sidebar.svg',
    devices: [
      {
        title: 'iPhone',
        svg: <SvgIphone />,
      },
      {
        title: 'Android',
        svg: <SvgAndroid />,
      },
    ],
  },
};
