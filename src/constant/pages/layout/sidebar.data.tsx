import { SvgAndroid, SvgIphone } from '@/ui/icons';

export const sidebarData = {
  auth: [
    {
      title: 'Registera dig',
      link: '/register',
    },
    {
      title: 'Login',
      link: '/login',
    },
  ],
  link: [
    { title: 'Skapa ett företagskonto', link: 'placeholder' },
    { title: 'Lägg till din restaurang', link: 'placeholder' },
    {
      title: 'Registrera dig för att leverera',
      link: 'placeholder',
    },
  ],
  social: {
    title: 'Det finns mer att älska i appen.',
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
