import { SvgFacebook, SvgInstagram, SvgTwitter } from '@/ui/icons/icons';

export const footerData = {
  linkFirst: [
    { title: 'Skaffa hjälp', link: 'placeholder' },
    { title: 'Lägg till din restaurang', link: 'placeholder' },
    { title: 'Registera dig för att leverera', link: 'placeholder' },
    { title: 'Skapa ett företagskonto', link: 'placeholder' },
    {
      title: 'Spara pengar på din första beställning',
      link: 'placeholder',
    },
  ],
  linkSecond: [
    { title: 'Restauranger nära mig', link: 'placeholder' },
    { title: 'Visa alla städer', link: 'placeholder' },
    { title: 'Visa alla länder', link: 'placeholder' },
    { title: 'Avhämtning nära mig', link: 'placeholder' },
    { title: 'Om Uber Eats', link: 'placeholder' },
  ],
  linkBottom: [
    { title: 'Så fungerar Ubers och Uber Eats webbplatser och appar' },
    { title: 'Sekretesspolicy' },
    { title: ' Villkor' },
    { title: 'Priser' },
    { title: 'Sälj inte min information (Kalifornien)' },
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
