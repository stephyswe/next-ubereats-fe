import { useState } from 'react';

export function Toggler({ data }: any) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative flex w-auto pb-6'>
      <div className='box-border flex h-12 w-full whitespace-nowrap rounded-[500px] bg-black08 p-1'>
        <ToggleItem onClick={() => setToggle(false)} title={data[0]} />
        <ToggleItem onClick={() => setToggle(true)} title={data[1]} />
        <div
          className={`absolute z-0 h-[calc(100%-32px)] w-[107.0156px] rounded-[500px] bg-white transition-all-ease-400 ${
            toggle ? 'translate-x-[107.0156px]' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </div>
  );
}

function ToggleItem({ title, onClick }: any) {
  return (
    <div onClick={onClick} className='z-10 flex w-1/2 justify-center'>
      <div
        role='radio'
        aria-checked='false'
        tabIndex={0}
        aria-label={title}
        className='box-border flex h-full w-full cursor-pointer select-none items-center justify-center rounded-[500px] bg-inherit px-4 text-center font-uberMoveText text-sm font-medium leading-4 text-black transition-all-ease-400'
      >
        {title}
      </div>
    </div>
  );
}
