export type DeliveryRestaurantListProps = {
  src: string;
  category: string[];
};

export type DeliveryContentSectionProps = {
  content: React.ReactNode;
  image: string | undefined;
};

export type DeliveryContentItemProps = Omit<
  DeliveryContentSectionStarterProps,
  'image' | 'btnText'
>;

export type DeliveryContentProps =
  | {
      type: string;
      title: string;
      subtitle: string;
      btnText?: undefined;
      image?: undefined;
    }
  | {
      type: string;
      title: string;
      subtitle?: undefined;
      btnText?: undefined;
      image?: undefined;
    }
  | {
      type: string;
      title: string;
      subtitle: string;
      btnText: undefined | string;
      image: string;
    };

export type DeliveryContentSectionStarterProps = {
  title: string;
  subtitle: string | undefined;
  btnText: string | undefined;
  image: string | undefined;
};
