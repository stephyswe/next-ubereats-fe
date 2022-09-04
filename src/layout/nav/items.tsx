import clsx from 'clsx';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

import { Input, Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgMap, SvgPosition } from '@/ui/icons';

export const NavItemDelivery = () => (
  <span>
    <Link
      href='/'
      className='box-border flex h-12 cursor-pointer flex-row items-center rounded-[500px] bg-[#eeeeee] px-3 py-2 text-sm font-medium leading-4 text-black hover:bg-[#e2e2e2] active:bg-[#cbcbcb]'
    >
      <div className='h-6 w-4 leading-[1]'>
        <SvgPosition />
      </div>
      <div className='spacer w-2'></div>
      <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
        Map location
      </div>
      <span className='inline-flex items-center text-sm font-medium leading-6 text-[#545454]'>
        &nbsp;&nbsp;•&nbsp;&nbsp;
      </span>
      <div className='whitespace-nowrap'>Pick up now</div>
    </Link>
  </span>
);

export function NavItemSearch({ className, placeholder }: any) {
  const { register } = useForm({
    mode: 'onChange',
  });

  return (
    <div
      role='search'
      aria-label='Sök efter restaurang eller typ av kök'
      className={clsx('flex-grow', className)}
    >
      <div className='relative flex flex-col'>
        <form>
          <label className='absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-normal clip-rect-1'>
            {placeholder}
          </label>
          <NavItemSearchInput register={register} placeholder={placeholder} />
          <ul className='absolute left-0 right-0 top-full z-10 hidden border-[0_1px_1px_1px] border-solid border-[#e2e2e2] bg-white box-shadow-rgb-10'></ul>
        </form>
      </div>
    </div>
  );
}

const NavItemSearchInput = ({
  register,
  placeholder,
}: {
  register: UseFormRegister<FieldValues>;
  placeholder: string;
}) => (
  <div className='relative box-border flex min-w-full border-none bg-[#eeeeee] px-4 py-2 text-base font-normal leading-6 text-black transition-bs-ease-300 box-shadow-inset-eee focus-within:box-shadow-rgb-0'>
    <div className='flex flex-shrink-0 items-center py-2'>
      <div className='h-6 w-6 leading-[1]'>
        <SvgMap />
      </div>
    </div>
    <Spacer className='w-4' />
    <Input
      variant='input3'
      type='text'
      role='combobox'
      name='searchTerm'
      placeholder={placeholder}
      register={register}
    />
    <Spacer className='w-2' />
  </div>
);
