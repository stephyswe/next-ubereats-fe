import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { DeliveryProvider, useDelivery } from '@/contexts/delivery';
import { HomeData } from '@/pages/_app/home.data';

import { EmploymentItem, EmploymentList } from '.';

export default {
  title: 'Pages/Employment',
  component: EmploymentList,
} as ComponentMeta<typeof EmploymentList>;

const Template: ComponentStory<typeof EmploymentList> = () => {
  const Wrapper = ({ children }: any) => (
    <DeliveryProvider>{children}</DeliveryProvider>
  );

  const Child = () => {
    const { setComplete } = useDelivery();
    setTimeout(() => {
      setComplete(true);
    }, 1000);

    return <EmploymentList data={HomeData.employmentData} />;
  };

  return (
    <Wrapper>
      <Child />
    </Wrapper>
  );
};

export const List = Template.bind({});
List.args = {
  data: HomeData.employmentData,
};

const Template2: ComponentStory<typeof EmploymentItem> = (args) => {
  const { setComplete } = useDelivery();
  setTimeout(() => {
    setComplete(true);
  }, 1000);

  return <EmploymentItem {...args} {...HomeData.employmentData[0]} />;
};

export const Item = Template2.bind({});
Item.args = {
  title: '',
  desc: '',
  src: '',
  link: '',
};
