import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { NavButton } from '@/components/buttons/NavButton';

import { NewLogo, Spacer } from '@/ui';

export function HomeNavigate({ onSidebar, change }: any) {
  const { isMobile } = useWindowSizeJs();

  if (isMobile) {
    return (
      <>
        {!change ? (
          <>
            <NavButton onClick={onSidebar} />
            <Spacer className='pr-6' />
            <NewLogo />
            <Spacer className='p-5' />
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <NavButton onClick={onSidebar} />
        <Spacer className='pr-8' />
        <NewLogo />
        {/*  <Spacer className='w-[128px]' /> */}
      </>
    );
  }
}
