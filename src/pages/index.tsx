import { Button, ButtonInput, Link } from '@/components';
import {
  CountryList,
  CountryWithMap,
  EmploymentList,
} from '@/components/pages/';

import { HomeData } from '@/constant/pages/home.data';
import { Container, Hero, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

export default function HomePage() {
  const {
    employmentData,
    countryData,
    countriesData,
    hero: {
      buttonText,
      inputPlaceholder,
      link: { href, linkTitle, linkSubtitle },
      title,
      background,
    },
  } = HomeData;

  return (
    <main>
      <Hero title={title} background={background}>
        <>
          <div className='flex flex-col gap-1 md:flex-row md:items-start'>
            <div className='relative flex-1 flex-col md:max-w-[540px]'>
              <ButtonInput svg={<SvgMap />} placeholder={inputPlaceholder} />
            </div>
            <Spacer className='w-2' />
            <Button variant='btnLg3' size='lg'>
              {buttonText}
            </Button>
          </div>
          <div className='mt-6 text-sm font-medium leading-4'>
            <Link href={href} className='cursor-pointer underline'>
              {linkTitle}
            </Link>{' '}
            {linkSubtitle}
          </div>
        </>
      </Hero>
      <Spacer className='h-20' />
      <Container>
        <EmploymentList data={employmentData} />
        <Spacer className='h-10 md:h-20' />
        <CountryWithMap data={countryData} />
        <Spacer className='h-20' />
        <CountryList data={countriesData} />
      </Container>
    </main>
  );
}
