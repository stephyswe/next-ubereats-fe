import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { SvgModalClose, SvgSidebar } from '@/ui/icons/icons';

type NavButtonProps = {
  onClick: () => void;
};

export const NavButton = ({ onClick }: NavButtonProps) => (
  <button
    aria-label='nav-btn'
    className='flex h-6 w-6 cursor-pointer items-center'
    onClick={onClick}
  >
    <SvgSidebar />
  </button>
);

export const CloseButton = ({ onClick }: any) => (
  <ButtonIcon
    variant='btnDish'
    onClick={() => onClick(false)}
    svg={
      <div className=' h-[24px] w-[24px]'>
        <SvgModalClose />
      </div>
    }
  />
);
