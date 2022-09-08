import clsx from 'clsx';

import { CloseButton } from '@/components/buttons/Buttons';

export * from './dish';

import { useRef } from 'react';
import Modal from 'react-modal';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { useModal } from '@/contexts';
import { DishModal } from '@/ui/modals/dish';
import { Spacer } from '@/ui/spacer';

import { storeModalStyles } from './data';

export const ModalList = () => {
  const { modalBody, modalIsOpen, setIsOpen } = useModal();

  const { isMobile } = useWindowSizeJs();

  function closeModal(type: any) {
    if (isMobile && type === 'hook') return;
    setIsOpen(false);
  }
  const ref = useRef(null);
  useOnClickOutside(ref, () => closeModal('hook'));

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={storeModalStyles}
      contentLabel='Example Modal'
      shouldCloseOnOverlayClick={true}
    >
      <Spacer className='md:pt-20' />
      <div
        ref={ref}
        role='dialog'
        className='relative m-auto bg-white sm:h-full sm:w-full '
      >
        <div className='relative top-0 z-40'></div>
        <div></div>
        <ModalHeader closeModal={closeModal} checkPhoto={modalBody?.photo} />
        <DishModal {...modalBody} closeModal={closeModal} />
      </div>
      <Spacer className='md:pb-20' />
    </Modal>
  );
};

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
