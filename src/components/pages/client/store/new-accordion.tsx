import React, { useRef, useState } from 'react';

export const AccordionNew = (props: any) => {
  const { name, choices } = props;
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : '0px');
  };
  return (
    <div onClick={HandleOpening} className=''>
      <div className='flex justify-between  p-4 text-black'>
        <h4 className='font-semibold'>{name}</h4>
        {isOpened ? 'open' : 'close'}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className='overflow-hidden bg-red-500 transition-all duration-200'
      >
        <p className='p-4'>
          {choices &&
            choices.map((choice: any, index: any) => (
              <p key={index}>{choice.name}</p>
            ))}
        </p>
      </div>
    </div>
  );
};
