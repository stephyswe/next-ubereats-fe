export function LoadingAni() {
  return <div className='loading-init loading-init-two'></div>;
}

export function LoadingSpacer() {
  return <div className='h-6 flex-shrink-0 bg-white'></div>;
}

export function LoadingInit({ children, w, h }: any) {
  return (
    <div
      style={{ maxWidth: w + 'px' }}
      className='cart_transition relative flex opacity-100'
    >
      <div
        style={{ height: h + 'px' }}
        className='relative m-0 flex cursor-pointer flex-row items-stretch overflow-hidden whitespace-nowrap rounded-[500px] text-base font-medium leading-5 loading-init loading-bg-full'
      >
        {children}
      </div>
    </div>
  );
}

export function LoadingRound({ w }: any) {
  return (
    <div className='flex flex-row items-center'>
      <div className='w-6 loading-item-round'></div>
      <div style={{ width: w + 'px' }} className='flex-shrink-0 bg-white'></div>
      <div className='w-6 loading-item-round-finish'></div>
    </div>
  );
}

// above to header.

export function LoadingInitAlt({ children }: any) {
  return (
    <div>
      <div className='relative flex overflow-hidden py-4'>
        <div className='relative overflow-hidden'>
          <div className='loading-init loading-init-two'></div>
          <div className='flex'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function LoadingRoundSmall({ w }: any) {
  return (
    <div style={{ width: w + 'px' }} className='relative h-10 overflow-hidden'>
      <div
        style={{ width: w + 'px' }}
        className=' absolute left-[-20px] top-[-20px] h-10 rounded-[40px] border-[20px] border-solid border-white loading-border'
      ></div>
    </div>
  );
}

export function LoadingSquare({ w, h }: any) {
  return (
    <div
      style={{
        width: w + 'px',
        height: h + 'px',
        backgroundSize: '100vw ' + h + 'px',
      }}
      className='loading-init loading-init-one'
    ></div>
  );
}
