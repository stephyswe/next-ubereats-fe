export const ItemImage = ({ coverImg }: { coverImg: string }) => (
  <picture>
    <source className='h-full w-full border-none object-cover' />
    <img
      className='h-full w-full border-none object-cover'
      alt=''
      src={coverImg}
    />
  </picture>
);
