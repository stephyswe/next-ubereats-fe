import { SvgLogin } from '@/ui/icons';

export const navHomeData = {
  auth: {
    register: {
      title: 'Sign up',
      link: '/auth/register',
    },
    login: {
      title: 'Log in',
      svg: <SvgLogin />,
      link: '/auth/login',
    },
  },
};
