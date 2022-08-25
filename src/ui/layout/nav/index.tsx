import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { NavClientHeader, NavHomeHeader } from '@/ui/layout/nav/header/';
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

  return (
    <>
      <Sidebar wrapperRef={wrapperRef} stylesBody={stylesBody} />
      <SwapHeader
        noHoverBorder={noHoverBorder}
        onSidebar={() => showSidebar(stylesBody, setStylesBody)}
        change={change}
      >
        <NavPerPage
          change={change}
          onScroll={position && position.scrollY > 400 && change}
        />
      </SwapHeader>
    </>
  );
}

function SwapHeader(props: any) {
  const { pathname } = useRouter();
  if (pathname === '/')
    return <NavHomeHeader {...props}>{props.children}</NavHomeHeader>;
  return <NavClientHeader {...props}>{props.children}</NavClientHeader>;
}
