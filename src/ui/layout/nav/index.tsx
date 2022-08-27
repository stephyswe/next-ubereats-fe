import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { NavHeader } from '@/ui/layout/nav/header';
import { NavPerPage } from '@/ui/layout/nav/perPage';
import { homePosition, showSidebar } from '@/ui/layout/nav/util';
import { Sidebar } from '@/ui/layout/sidebar';

export function Nav({ noHoverBorder, fixed }: any) {
  const { isMobile } = useWindowSizeJs();

  const router = useRouter();
  const sidebarRef = useRef(null);
  const [active, setActive] = useState(true);
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(false);
  }, [router]);

  const position = useWindowScrollPosition();
  useOutsideAlerter(sidebarRef, setActive);
  if (!fixed) homePosition(position, setChange, change, 1, 200, isMobile);

  function checkHome() {
    let home = false;
    if (router.pathname === '/') home = true;
    return home;
  }

  function checkOnScroll() {
    let onScrollPosition = 400;
    if (router.pathname !== '/') onScrollPosition = 450;
    return position && position.scrollY > onScrollPosition && change;
  }

  return (
    <>
      <Sidebar sidebarRef={sidebarRef} active={active} />
      <NavHeader
        home={checkHome()}
        noHoverBorder={noHoverBorder}
        onSidebar={() => showSidebar(active, setActive)}
        change={change}
      >
        <NavPerPage change={change} onScroll={checkOnScroll()} />
      </NavHeader>
    </>
  );
}
