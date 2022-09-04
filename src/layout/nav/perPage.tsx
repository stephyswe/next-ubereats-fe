import { useRouter } from 'next/router';

import { NavCategoryContent } from '@/layout/nav/content/client/category';
import { NavCityContent } from '@/layout/nav/content/client/city';
import { NavbarDiningContent } from '@/layout/nav/content/client/dining';
import { NavbarStoreContent } from '@/layout/nav/content/client/store';
import { NavHomeContent } from '@/layout/nav/content/home';

type NavPerPageProps = {
  change: boolean;
  onScroll: boolean;
};

export const NavPerPage = (props: NavPerPageProps) => {
  const { pathname } = useRouter();
  switch (pathname) {
    case '/':
      return <NavHomeContent {...props} />;

    case '/client/city/[label]':
      return <NavCityContent {...props} />;

    case '/client/category/[label]/[sublabel]':
      return <NavCategoryContent {...props} />;

    case '/client/region/[label]':
      return <NavCityContent />;

    case '/client/dining/pickup':
      return <NavbarDiningContent />;

    case '/client/dining/delivery':
      return <NavbarDiningContent />;

    case '/client/store/[label]':
      return <NavbarStoreContent />;

    default:
      break;
  }

  return <div>no case</div>;
};
