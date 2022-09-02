import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HomeData } from '@/constant/pages/home.data';
import { DeliveryProvider, useDelivery } from '@/contexts/delivery';

import { CountryList, CountryWithMap } from '.';

const mockData = {
  title: 'Country',
  link: {
    href: '#',
    title: 'Link',
  },
  mapCenter: {
    lat: 0,
    lng: 0,
  },
  cities: [
    {
      city: 'City',
      link: '#',
    },
  ],
};

export default {
  title: 'Pages/Country',
  component: CountryWithMap,
} as ComponentMeta<typeof CountryWithMap>;

const Template: ComponentStory<typeof CountryWithMap> = () => {
  const Wrapper = ({ children }: any) => (
    <DeliveryProvider>{children}</DeliveryProvider>
  );

  const Child = () => {
    const { setComplete } = useDelivery();
    setTimeout(() => {
      setComplete(true);
    }, 1000);

    return <CountryWithMap data={HomeData.countryData} />;
  };

  return (
    <Wrapper>
      <Child />
    </Wrapper>
  );
};

const Template2: ComponentStory<typeof CountryWithMap> = () => {
  const { setComplete } = useDelivery();
  setTimeout(() => {
    setComplete(true);
  }, 1000);

  return <CountryList data={HomeData.countriesData} />;
};

export const Map = Template.bind({});
Map.args = {
  data: mockData,
};

export const List = Template2.bind({});
List.args = {
  data: mockData,
};
