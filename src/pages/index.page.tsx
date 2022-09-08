import { useRouter } from 'next/router';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Button, ButtonInput, Link } from '@/components';
import { ButtonDeliver } from '@/components/inputs/ButtonInput';

import { CountryList, CountryWithMap, EmploymentList } from '@/pages/_app';
import { HomeData } from '@/pages/_app/home.data';
import { Container, Hero, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

export default function HomePage() {
  const router = useRouter();
  const { isMobile } = useWindowSizeJs();
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

  const onClick = () => (isMobile ? router.push('/details/delivery') : null);

  return (
    <main>
      <Hero title={title} background={background}>
        <div className='flex flex-col sm:gap-1 md:flex-row md:items-start'>
          <div className='relative flex-1 flex-col md:max-w-[540px]'>
            <ButtonInput
              svg={<SvgMap />}
              placeholder={inputPlaceholder}
              onClick={onClick}
            />
          </div>
          <Spacer className='w-2' />
          <ButtonDeliver />
          <Spacer className='w-2' />
          <Button variant='btnLg3' size='lg'>
            {buttonText}
          </Button>
        </div>
        <div className='mt-6 text-sm font-medium leading-4'>
          <Link href={href} className='underline'>
            {linkTitle}
          </Link>{' '}
          {linkSubtitle}
        </div>
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
