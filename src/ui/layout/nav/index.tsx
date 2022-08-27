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
  const wrapperRef = useRef(null);
  const [stylesBody, setStylesBody] = useState(true);
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(false);
  }, [router]);

  const position = useWindowScrollPosition();
  useOutsideAlerter(wrapperRef, setStylesBody);
  if (!fixed) homePosition(position, setChange, change, 1, 200, isMobile);

  let home = false;
  let onScrollPosition = 400;
  if (router.pathname === '/') {
    home = true;
  } else {
    onScrollPosition = 450;
  }

  return (
    <>
      <Sidebar wrapperRef={wrapperRef} stylesBody={stylesBody} />
      <NavHeader
        home={home}
        noHoverBorder={noHoverBorder}
        onSidebar={() => showSidebar(stylesBody, setStylesBody)}
        change={change}
      >
        <NavPerPage
          change={change}
          onScroll={position && position.scrollY > onScrollPosition && change}
        />
      </NavHeader>
    </>
  );
}
