import { SvgFacebook, SvgInstagram, SvgTwitter } from '@/ui/icons/icons';

export const footerData = {
  linkFirst: [
    { title: 'Get Help', link: 'placeholder' },
    { title: 'Add your restaurant', link: 'placeholder' },
    { title: 'Sign up to deliver', link: 'placeholder' },
    { title: 'Create a business account', link: 'placeholder' },
  ],
  linkSecond: [
    { title: 'Restaurants near me', link: 'placeholder' },
    { title: 'View all citites', link: 'placeholder' },
    { title: 'View all countries', link: 'placeholder' },
    { title: 'Pickup near me', link: 'placeholder' },
    { title: 'About Uber Eats', link: 'placeholder' },
  ],
  linkBottom: [
    { title: 'How the Uber and Uber Eats sites and apps work' },
    { title: 'Privacy Policy' },
    { title: 'Terms' },
    { title: 'Pricing' },
    { title: 'Do not sell my info (California)' },
  ],
  socialList: [
    {
      title: 'Facebook',
      svg: <SvgFacebook />,
    },
    {
      title: 'Twitter',
      svg: <SvgTwitter />,
    },
    {
      title: 'Instagram',
      svg: <SvgInstagram />,
    },
  ],
};
