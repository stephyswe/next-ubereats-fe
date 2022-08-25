import { useRouter } from 'next/router';

import { NavbarCategoryContent } from '@/ui/layout/nav/content/client/category';
import { NavCityContent } from '@/ui/layout/nav/content/client/city';
import { NavbarDiningContent } from '@/ui/layout/nav/content/client/dining';
import { NavbarStoreContent } from '@/ui/layout/nav/content/client/store';
import { NavHomeContent } from '@/ui/layout/nav/content/home';

export const NavPerPage = (props: any) => {
  const { pathname } = useRouter();
  switch (pathname) {
    case '/':
      return <NavHomeContent {...props} />;

    case '/client/city/[label]':
      return <NavCityContent {...props} />;

    case '/client/category/[label]/[sublabel]':
      return <NavbarCategoryContent />;

    case '/client/region/[label]':
      return <NavbarCategoryContent />;

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
