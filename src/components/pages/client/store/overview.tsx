import NextImage from '@/components/image';
import { Link } from '@/components/links';
import Typography from '@/components/typography';

import { Spacer } from '@/ui';
import { SvgPersonAdd, SvgSchedule } from '@/ui/icons';

const OverviewDetail = () => (
  <div className='flex'>
    <Link href='placeholder'>
      <div className='flex items-center gap-x-1'>
        <NextImage
          alt='something'
          src='/images/Star_Black_Eats_3.png'
          width='14'
          height='14'
        />
        <span className='text-sm font-medium leading-4'>
          4.3 (100+ omdömen) • Hamburgare • $
        </span>
      </div>
    </Link>
    <span className='inline-flex items-center text-sm font-medium leading-4 text-black'>
      &nbsp;&nbsp;•&nbsp;&nbsp;
    </span>
    <Link
      rel='nofollow'
      className='cursor-pointer text-sm font-medium leading-4 text-black underline'
      href='placeholder'
    >
      Mer information
    </Link>
  </div>
);

export const Overview = () => (
  <div className='pt-6'>
    <div>
      <Typography as='h2' variant='h2b' className='leading-[36px]'>
        McDonalds Avenyn
      </Typography>
      <div className='h-2'></div>
      <div className='flex'>
        <div>
          <OverviewDetail />
          <Spacer className='h-[2px]' />
          <Typography as='span' variant='spanOverviewText'>
            Kungsportsavenyen 32, Gothenburg, Västra Götalands län 411 36
          </Typography>
          <Spacer className='h-[2px]' />
          <Typography as='span' variant='spanOverviewText'>
            10–20 min • 59.00SEK i avgift
          </Typography>
          <Spacer className='h-[2px]' />
          <Link href='placeholder'>
            <Typography as='span' variant='spanOverviewText'>
              Tryck för att se öppettider, adress med mera
            </Typography>
          </Link>
        </div>
      </div>
      <OverViewButtons />
    </div>
  </div>
);

const OverViewButtons = () => (
  <div className='flex min-h-[56px] items-end'>
    <div className='relative inline-block'>
      <div className='relative z-0'>
        <OverviewButton svg={<SvgPersonAdd />} title='Gruppbeställning' />
      </div>
    </div>
    <div className='w-2'></div>
    <OverviewButton svg={<SvgSchedule />} title='Schemalägg' />
  </div>
);

const OverviewButton = ({ svg, title }: any) => (
  <Link
    href='placeholder'
    variant='restaurantBtnLink'
    className='hover:bg-gray-500'
  >
    {svg}
    <div className='w-2'></div>
    {title}
  </Link>
);
