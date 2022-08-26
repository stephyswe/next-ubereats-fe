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
  const { employmentData, countrySelected, countryList, hero } = HomeData;
  return (
    <main>
      <Hero title={hero.title} image={hero.src}>
        <>
          {/* <div className='w-fit'>
            <Toggler data={hero.toggle} />
          </div> */}
          <div className='flex flex-col gap-1 md:flex-row md:items-start'>
            <div className='relative flex-1 flex-col md:max-w-[540px]'>
              <ButtonInput
                svg={<SvgMap />}
                placeholder={hero.input.placeholder}
              />
            </div>
            <Spacer className='w-2' />
            <Button variant='btnLg3' size='lg'>
              {' '}
              {hero.buttonText}
            </Button>
          </div>
          <div className='mt-6 font-uberMoveText text-sm font-medium leading-4'>
            <Link href={hero.links.link} className='cursor-pointer underline'>
              {hero.links.title}
            </Link>{' '}
            {hero.links.subtitle}
          </div>
        </>
      </Hero>
      <Spacer className='h-20' />
      <Container>
        <EmploymentList data={employmentData} />

        <Spacer className='h-10 md:h-20' />
        <CountryWithMap data={countrySelected} />

        <Spacer className='h-20' />
        <CountryList data={countryList} />
      </Container>
    </main>
  );
}
