import { SvgLogin } from '@/ui/icons';

export const navHomeData = {
  auth: {
    register: {
      title: 'Registera dig',
      link: '/auth/register',
    },
    login: {
      title: 'Logga in',
      svg: <SvgLogin />,
      link: '/auth/login',
    },
  },
};
