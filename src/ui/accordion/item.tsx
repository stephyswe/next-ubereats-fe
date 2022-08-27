import clsx from 'clsx';

import { Spacer } from '@/ui';

export const AccordionItem = ({
  type = 'radio',
  isActive,
  onClick,
  title,
}: any) => (
  <>
    <input
      type={type}
      className='pointer-events-none absolute opacity-0 outline-none'
      value='0'
    />
    <label
      onClick={() => onClick(title)}
      className={labelStyles(isActive, type)}
    >
      <Spacer className='w-4' />
      <div className='relative mt-[calc(3px)] flex flex-1 justify-between'>
        <div className='flex flex-1 flex-col justify-center self-start'>
          <div className='flex flex-row'>
            <div className='text-sm font-medium leading-4'>{title}</div>
            <Spacer className='w-2' />
          </div>
        </div>
      </div>
    </label>
  </>
);

function labelStyles(isActive: any, type: any) {
  if (type === 'checkbox') {
    return clsx(
      'box-border flex w-full cursor-pointer flex-row justify-between overflow-hidden text-base font-medium leading-5 transition-bg-ease-100',
      `before:box-border before:flex before:h-[22px] before:w-[22px] before:cursor-pointer before:content-['']`,
      ``,

      isActive
        ? `before:border-[0px] before:bg-[url('/images/store/checkbox-active.svg')] before:content-[''] before:bg-center`
        : 'before:border-[3px] before:border-solid before:border-[#6b6b6b]'
    );
  } else if (type === 'radio') {
    return clsx(
      'box-border flex w-full cursor-pointer flex-row justify-between overflow-hidden text-base font-medium leading-5 transition-bg-ease-100',
      `before:box-border before:flex before:h-[22px] before:w-[22px] before:cursor-pointer before:rounded-[50%] before:content-['']`,

      isActive
        ? 'before:border-[8px] before:border-solid before:border-[#000]'
        : 'before:border-[3px] before:border-solid before:border-[#6b6b6b]'
    );
  }
}
