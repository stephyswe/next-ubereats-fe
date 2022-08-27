import clsx from 'clsx';

import { sidebarData } from '@/constant/pages/layout/sidebar.data';

import {
  SidebarAuthentication,
  SidebarLinkList,
  SidebarSocialList,
} from './components';

type SideBarProps = {
  sidebarRef: React.RefObject<HTMLDivElement>;
  active: boolean;
};

export function Sidebar({ active, sidebarRef }: SideBarProps) {
  const { link, auth, social } = sidebarData;
  return (
    <div
      className={clsx(
        'fixed left-0 top-0 z-50 flex flex-row overflow-hidden',
        active
          ? 'h-0 w-0 bg-[#262626cc] opacity-0 sidebar-transition'
          : 'h-full w-full bg-[#262626cc]'
      )}
    >
      <aside
        ref={sidebarRef}
        className={clsx(
          'box-border w-[300px] max-w-[80%] flex-col overflow-y-auto overflow-x-hidden bg-white p-6 text-black',
          'transition-all-ease-in-out-400 box-shadow-sidebar-25-10',
          active ? 'translate-x-[-300px] opacity-0' : 'grid-rows-6'
        )}
      >
        <nav>
          <div className='flex min-h-[calc(100vh-72px)] flex-col justify-between'>
            <SidebarAuthentication data={auth}>
              <SidebarLinkList data={link} />
            </SidebarAuthentication>
            <SidebarSocialList data={social} />
          </div>
        </nav>
      </aside>
    </div>
  );
}
