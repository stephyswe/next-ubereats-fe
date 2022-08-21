import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

import { Link } from '@/components';
import { UnstyledInput } from '@/components/inputs/UnstyledInput';

import { Spacer } from '@/ui';
import { SvgCart, SvgCartSearch, SvgPosition } from '@/ui/icons';

export const Cart = () => (
  <div className='flex flex-grow-0 items-center justify-end'>
    <div className='relative flex max-w-[300px] opacity-100 transition-width-opacity-400'>
      <div className='flex h-12 cursor-auto flex-row items-stretch overflow-hidden whitespace-nowrap rounded-[500px] bg-black font-uberMoveText text-base font-medium leading-5'>
        <button className='flex flex-row items-center bg-black px-4 py-2 text-white'>
          <SvgCart />
          <Spacer className='w-2' />0 varukorgar
        </button>
      </div>
    </div>
  </div>
);

export const CartDelivery = () => (
  <span>
    <Link
      href='/'
      className='box-border flex h-12 cursor-pointer flex-row items-center rounded-[500px] bg-[#eeeeee] px-3 py-2 font-uberMoveText text-sm font-medium leading-4 text-black hover:bg-[#e2e2e2] active:bg-[#cbcbcb]'
    >
      <div className='h-6 w-4 leading-[1]'>
        <SvgPosition />
      </div>
      <div className='spacer _8'></div>
      <div className='overflow-hidden text-ellipsis whitespace-nowrap'>
        Nordstan
      </div>
      <span className='inline-flex items-center font-uberMoveText text-sm font-medium leading-6 text-[#545454]'>
        &nbsp;&nbsp;•&nbsp;&nbsp;
      </span>
      <div className='whitespace-nowrap'>Avhämtning nu</div>
    </Link>
  </span>
);

export function CartSearch() {
  const { register } = useForm({
    mode: 'onChange',
  });

  return (
    <div
      role='search'
      aria-label='Sök efter restaurang eller typ av kök'
      className='flex-grow'
    >
      <div className='relative flex flex-col'>
        <form>
          <label className='cart_clip absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-normal'>
            Vad är du sugen på?
          </label>
          <CartInput register={register} />
          <ul className='cart_border_width cart_shadow absolute left-0 right-0 top-full z-10 hidden border-solid border-[#e2e2e2] bg-white'></ul>
        </form>
      </div>
    </div>
  );
}

const CartInput = ({
  register,
}: {
  register: UseFormRegister<FieldValues>;
}) => (
  <div className='relative box-border flex min-w-full border-none bg-[#eeeeee] px-4 py-2 font-uberMoveText text-base font-normal leading-6 text-black transition-bs-ease-300 box-shadow-inset-eee focus-within:box-shadow-rgb-0'>
    <div className='flex flex-shrink-0 items-center py-2'>
      <div className='h-6 w-6 leading-[1]'>
        <SvgCartSearch />
      </div>
    </div>
    <Spacer className='w-4' />
    <UnstyledInput
      variant='input3'
      type='text'
      role='combobox'
      name='searchTerm'
      placeholder='Vad är du sugen på?'
      register={register}
    />
    <Spacer className='w-2' />
  </div>
);
