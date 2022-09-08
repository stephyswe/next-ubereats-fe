/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useRef, useState } from 'react';
import Modal from 'react-modal';

import {
  componentParameter,
  mobileParameter,
  Story,
  StoryContainer,
  StoryList,
} from '@/lib/storybook';
import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { dishGroupData } from '@/pages/_app/items/dish';
import { ModalHeader, Spacer } from '@/ui';
import { storeModalStyles } from '@/ui/modals/data';

import {
  DishModal,
  ModalBuy,
  ModalBuyButton,
  ModalBuyQuantity,
  ModalDetail,
  ModalImage,
} from '.';

export default {
  title: 'UI/Modal',
  component: DishModal,
  parameters: componentParameter(),
} as ComponentMeta<typeof DishModal>;

const TemplateAll: ComponentStory<typeof DishModal> = () => {
  const ref = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  useOnClickOutside(ref, closeModal);

  return (
    <StoryContainer>
      <StoryList>
        <Story title='modal'>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={storeModalStyles}
            contentLabel='Example Modal'
            shouldCloseOnOverlayClick={true}
          >
            <Spacer className='pt-20' />
            <div ref={ref} role='dialog' className='relative m-auto bg-white'>
              <div className='relative top-0 z-40'></div>
              <div></div>
              <ModalHeader
                closeModal={closeModal}
                checkPhoto={dishGroupData.Sallader[0].photo}
              />
              <DishModal
                {...dishGroupData.Sallader[0]}
                closeModal={closeModal}
              />
            </div>
            <Spacer className='pb-20' />
          </Modal>
        </Story>
      </StoryList>
      <StoryList title='Partials' className='md:grid-cols-2'>
        <Story title='item - dishModal' bgColor='white'>
          <DishModal {...dishGroupData.Sallader[0]} closeModal={closeModal} />
        </Story>
        <Story title='image' bgColor='white'>
          <ModalImage photo={dishGroupData.Sallader[1].photo} name='name' />
        </Story>
        <Story title='detail' bgColor='white'>
          <ModalDetail price={1} name='two' />
        </Story>
        <Story title='buy' bgColor='white'>
          <ModalBuy closeModal={closeModal} id={1} />
        </Story>
      </StoryList>
      <StoryList title='modalBuy' className='md:grid-cols-2'>
        <Story title='quantity' bgColor='white'>
          <ModalBuyQuantity />
        </Story>
        <Story title='button'>
          <ModalBuyButton onClick={() => {}} loading={false} />
        </Story>
      </StoryList>
      <StoryList>
        <DishModal {...dishGroupData.Sallader[1]} closeModal={closeModal} />
      </StoryList>
    </StoryContainer>
  );
};

export const Desktop = TemplateAll.bind({});
export const Mobile = TemplateAll.bind({});
Mobile.parameters = mobileParameter();
