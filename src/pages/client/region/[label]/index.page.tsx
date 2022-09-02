import { Button, ButtonInput, Typography } from '@/components';
import { CountryListNew } from '@/components/pages/client/home/country';

import { regionData } from '@/constant/pages/client/region.data';
import { Breadcrumb, Container, HeroDynamic, Separator, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

export { getServerSideProps } from '@/constant/server/region.server';

type DeliveryInformationItemProps = { title: string; subtitle: string };

export default function RegionPage({
  deliData,
  title,
  breadcrumb,
  regionSubtitle,
  citiesData,
  citiesTitle,
  nearbyRegionData,
}: any) {
  const {
    hero: { buttonText, background, inputPlaceholder },
  } = regionData;

  return (
    <main className='block'>
      <HeroDynamic
        background={background}
        title='Order your favorites with Uber Eats'
      >
        <div className='relative flex flex-1 flex-col md:w-[540px]'>
          <ButtonInput svg={<SvgMap />} placeholder={inputPlaceholder} />
        </div>
        <Spacer className='w-4' />
        <Button className='w-[300px]' variant='btnLg3' size='lg'>
          {buttonText}
        </Button>
      </HeroDynamic>

      <Spacer className='h-6' />
      <Container>
        <Breadcrumb data={breadcrumb} />
      </Container>
      <Container>
        <Typography as='h2' variant='4xl'>
          {title}
        </Typography>
        <Spacer className='h-2' />
        <p>{regionSubtitle}</p>

        <Separator />
      </Container>
      <Container>
        <Typography as='h2' variant='4xl'>
          {citiesTitle}
        </Typography>
        <CountryListNew data={citiesData} />
        <Separator />
      </Container>
      <Container>
        <div>
          {deliData.map((item: DeliveryInformationItemProps) => (
            <div key={item.title}>
              <Typography as='h2' variant='4xl'>
                {item.title}
              </Typography>
              <Spacer className='h-2' />
              <p>{item.subtitle}</p>
              <Spacer className='h-4' />
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Typography as='h2' variant='4xl'>
          Nearby regions
        </Typography>
        <CountryListNew data={nearbyRegionData} />
      </Container>
    </main>
  );
}
