import clsx from 'clsx';

import { CloseButton } from '@/components/buttons/NavButton';

export * from './dish';

export const ModalHeader = ({ closeModal, checkPhoto }: any) => (
  <div
    className={clsx('sticky top-0 z-30 w-full', checkPhoto ? 'h-0' : 'h-12')}
  >
    <div
      className={clsx(
        'absolute flex h-[64px] w-full items-center bg-white opacity-0 transition-height-opacity-300',
        `before:flex-[1_0_48px] before:content-[''] `,
        `after:flex-[1_0_0px] after:content-['']`
      )}
    >
      <div className='whitespace-no-wrap flex-1 overflow-hidden text-ellipsis p-3 text-center text-lg font-medium leading-6 text-black'>
        Cheese Triangles
      </div>
    </div>
    <CloseButton onClick={closeModal} />
  </div>
);
