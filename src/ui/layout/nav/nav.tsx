import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Sidebar } from '@/ui/layout';
import { homePosition, NavHeader, NavPerPage } from '@/ui/layout/nav';

export type NavProps = {
  noBorder?: boolean;
  fixed?: boolean;
};

export const Nav = ({ noBorder, fixed }: NavProps) => {
  const { isMobile } = useWindowSizeJs();

  const router = useRouter();
  const routeHome = router.pathname === '/';
  const sidebarRef = useRef(null);
  const [active, setActive] = useState(true);
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(false);
  }, [router]);

  const position: any = useWindowScrollPosition();
  useOutsideAlerter(sidebarRef, setActive);
  if (!fixed) homePosition(position, setChange, change, 1, 200, isMobile);

  function checkOnScroll() {
    let onScrollPosition = 400;
    if (!routeHome) onScrollPosition = 450;
    return position && position.scrollY > onScrollPosition && change;
  }

  function showSidebar(active: boolean, setActive: any) {
    if (active) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    setActive(!active);
  }

  return (
    <>
      <Sidebar sidebarRef={sidebarRef} active={active} />
      <NavHeader
        home={routeHome ? true : false}
        noBorder={noBorder}
        onSidebar={() => showSidebar(active, setActive)}
        change={change}
      >
        <NavPerPage change={change} onScroll={checkOnScroll()} />
      </NavHeader>
    </>
  );
};
