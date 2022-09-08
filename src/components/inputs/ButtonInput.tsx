import clsx from 'clsx';
import { useRef, useState } from 'react';
import Modal from 'react-modal';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { Button } from '@/components';
import { Link } from '@/components/links';

import { ModalHeader, Spacer } from '@/ui';
import { SvgDropdown, SvgSchedule } from '@/ui/icons';
import { homeModalStyles } from '@/ui/modals/data';

import { UnstyledInput } from './UnstyledInput';

type InputProps<C extends React.ElementType> = {
  svg: JSX.Element;
} & React.ComponentProps<C>;

const SvgClock = ({ width }: any) => (
  <svg
    width={width ?? '24px'}
    height={width ?? '24px'}
    fill='none'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-label='När'
    role='img'
    focusable='false'
  >
    <path
      d='M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z'
      fill='#000000'
    ></path>
  </svg>
);

const SvgDownArrow = () => (
  <svg
    width='24px'
    height='24px'
    fill='none'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    focusable='false'
  >
    <path
      d='M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z'
      fill='#000000'
      transform='rotate(180, 12, 12)'
    ></path>
  </svg>
);

const InputIcon = ({ svg, ...props }: InputProps<'div'>) => (
  <div className='flex h-12 w-12 items-center justify-center'>
    <div className='h-6 w-6 leading-[1]'>{svg}</div>
  </div>
);

export const ButtonDeliver = () => {
  const [isActive, setActive] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setActive(false);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const ref = useRef(null);
  const timeRef = useRef(null);

  function onClick() {
    setActive(!isActive);
  }

  useOnClickOutside(ref, closeModal);
  useOnClickOutside(timeRef, onClick);

  return (
    <div>
      <div className='relative'>
        <div
          onClick={onClick}
          role='button'
          className={clsx(
            'h-[56px] cursor-pointer bg-white',
            isActive
              ? 'shadow-[rgb(000)_0px_-2px_0px_inset]'
              : 'shadow-[inset_0px_-1px_0px_#eee]'
          )}
        >
          <div className='flex h-[56px] w-full items-center bg-white text-black'>
            <Spacer className='w-1' />

            <InputIcon svg={<SvgClock />} />

            <div className='flex h-full grow items-center justify-start overflow-hidden'>
              <div className='flex flex-col text-[16px] font-medium'>
                Deliver now
              </div>
              <Spacer className='w-1' />
              <InputIcon svg={<SvgDownArrow />} />
            </div>
          </div>
        </div>
        {/* new  ; */}
        {isActive ? (
          <div
            ref={timeRef}
            className='absolute top-full left-[0] z-20 flex min-w-full flex-col bg-white p-[8px_0px_16px] box-shadow-rgb-10'
          >
            <Button
              onClick={onClick}
              className='flex cursor-pointer items-center p-[8px_16px] text-black transition-bg-ease-100 outline-none-1 hover:bg-[#f6f6f6]'
            >
              <div className='flex h-8 w-8 flex-none items-center justify-center rounded-[50%]'>
                <div className='h-5 w-5 leading-[1]'>
                  <SvgClock width='20px' />
                </div>
              </div>
              <Spacer className='w-2' />
              <div className='whitespace-nowrap text-[16px] font-medium leading-5'>
                Deliver now
              </div>
            </Button>
            <Link
              onClick={openModal}
              href='/'
              className='flex cursor-pointer items-center p-[8px_16px] text-black transition-bg-ease-100 outline-none-1 hover:bg-[#f6f6f6]'
            >
              <div className='flex h-8 w-8 flex-none items-center justify-center rounded-[50%]'>
                <div className='h-5 w-5 leading-[1]'>
                  <SvgSchedule width='16px' />
                </div>
              </div>
              <Spacer className='w-2' />
              <div className='whitespace-nowrap text-[16px] font-medium leading-5'>
                Schedule for later
              </div>
            </Link>
          </div>
        ) : null}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={homeModalStyles}
        contentLabel='Example Modal'
        shouldCloseOnOverlayClick={true}
      >
        <Spacer className='pt-20' />
        <div ref={ref} role='dialog' className='relative bg-white'>
          <div className='relative top-0 z-40'></div>
          <div></div>
          <ModalHeader closeModal={closeModal} />
          <div className='w-[410px] p-6'>
            <div className='mb-6 font-uberMove text-[32px] font-bold leading-[40px]'>
              Pick a time
            </div>
            <SelectElement />
            <Spacer className='h-3' />
            <SelectElement />
            <Button variant='btnLg3' size='lg' className='mt-6 w-full'>
              Schedule
            </Button>
            <Button variant='btnLg3' size='lg' className='mt-3 w-full'>
              Deliver now
            </Button>
          </div>
        </div>
        <Spacer className='pb-20' />
      </Modal>
    </div>
  );
};

export const SelectElement = () => {
  return (
    <div className='text-base'>
      <div className='relative w-full'>
        <select
          className={clsx(
            'appearance-none bg-[#eee] p-[12px_32px_12px_16px] shadow-[inset_0px_-1px_0px_#eee] outline-none transition-[box-shadow_0.3s_ease-in-out]',
            'box-border min-w-full cursor-pointer rounded-none border-none'
          )}
        >
          <option value='2022-09-05' className='bg-[#eee]'>
            Today, Mon, 5 Sept
          </option>
          <option value='2022-09-06' className='bg-[#eee]'>
            Tomorrow, Tue, 6 Sept
          </option>
        </select>

        <div className='pointer-events-none absolute right-[8px] top-[calc(50%-12px)]'>
          <div className='h-6 w-6 leading-[1]'>
            <SvgDropdown rotate />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ButtonInput = <C extends React.ElementType>({
  placeholder,
  innerClassName,
  svg,
  ...rest
}: InputProps<C>) => {
  return (
    <div
      className={clsx(
        'px-4 py-2 text-center text-base font-normal leading-6 text-black',
        'relative box-border flex min-w-full border-none bg-white',
        'transition-bs-ease-300 box-shadow-inset-eee focus-within:box-shadow-rgb-0',
        innerClassName
      )}
    >
      <div className='flex h-6 w-6 flex-shrink-0 items-center py-2 leading-[1]'>
        {svg}
      </div>
      <div className='w-4'></div>
      <UnstyledInput
        variant='input2'
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        register={() => {}}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export const ButtonInputDeliver = <C extends React.ElementType>({
  placeholder,
  innerClassName,
  ...rest
}: InputProps<C>) => {
  return (
    <div
      className={clsx(
        'px-4 py-4 text-center text-base font-normal leading-6 text-black',
        'relative box-border flex min-w-full border-none bg-white',
        'transition-bs-ease-300 box-shadow-inset-eee focus-within:box-shadow-rgb-0',
        innerClassName
      )}
    >
      <UnstyledInput
        variant='input2'
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        register={() => {}}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
