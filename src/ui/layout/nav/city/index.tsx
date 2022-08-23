import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';

import { NavbarCategoryContent } from '@/ui/layout/nav/city/content/category';
import { NavbarCityContent } from '@/ui/layout/nav/city/content/city';
import { NavbarDiningContent } from '@/ui/layout/nav/city/content/dining';
import { NavbarStoreContent } from '@/ui/layout/nav/city/content/store';
import { NavCityHeader } from '@/ui/layout/nav/city/header';
import { Sidebar } from '@/ui/layout/sidebar';

export function CityNav({ noHoverBorder, fixed }: any) {
  const router = useRouter();
  const changePosition = 1;
  const [stylesBody, setStylesBody] = useState(true);
  const [change, setChange] = useState(false);

  const wrapperRef = useRef(null);

  let position;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    position = useWindowScrollPosition();
  }

  useOutsideAlerter(wrapperRef, setStylesBody);

  if (position && !fixed) {
    if (position.scrollY > changePosition && !change) setChange(true);
    if (position.scrollY <= changePosition && change) setChange(false);
  }

  useEffect(() => {
    setChange(false);
  }, [router]);

  function onClickSidebar() {
    if (stylesBody) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    setStylesBody(!stylesBody);
  }

  return (
    <>
      <Sidebar wrapperRef={wrapperRef} stylesBody={stylesBody} />
      <NavCityHeader
        noHoverBorder={noHoverBorder}
        onClickSidebar={onClickSidebar}
        change={change}
      >
        <NavDynamicPerPage />
      </NavCityHeader>
    </>
  );
}

function NavDynamicPerPage() {
  const { pathname } = useRouter();
  switch (pathname) {
    case '/client/city/[label]':
      return <NavbarCityContent />;

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
}
