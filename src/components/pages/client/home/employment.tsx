import { Link, NextImage, Typography } from '@/components';

type EmploymentItemProps = {
  title: string;
  desc: string;
  src: string;
  link: string;
};

type EmploymentListProps = {
  data: EmploymentItemProps[];
};

export const EmploymentList = ({ data }: EmploymentListProps) => (
  <div
    id='cards'
    className='mx-[-12px] mb-[-24px] box-border flex flex-wrap md:flex-nowrap'
  >
    {data.map((card: EmploymentItemProps) => (
      <EmploymentItem key={card.title} {...card} />
    ))}
  </div>
);

const EmploymentItem = ({ title, desc, src, link }: EmploymentItemProps) => (
  <div className='mb-6 ml-0 box-border block w-full flex-none px-3 md:w-1/3 '>
    <Link href={link} className='mb-4'>
      <div className='relative mb-2 h-0 w-full bg-[#e2e2e2] pt-[55.970149253731336%]'>
        <NextImage
          alt={title}
          src={src}
          useSkeleton
          className='absolute left-0 top-0 w-full'
          layout='fill'
        />
      </div>
      <Typography as='h3' variant='3xl'>
        {title}
      </Typography>
      <Typography
        as='p'
        className='mt-2 text-base leading-5 underline'
        weight='medium'
        leading='5'
      >
        {desc}
      </Typography>
    </Link>
  </div>
);
