import { SvgSidebar } from '@/ui/icons/icons';

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
