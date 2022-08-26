import {
  breadCrumbGenerate,
  capitalizeCity,
  titleCaseFull,
} from '@/lib/helper';

export async function getServerSideProps(context: any) {
  const { label } = context.params;
  const city = capitalizeCity(label);

  const cityInfo = [
    {
      title: `${city} food delivery and takeout`,
      subtitle: `With 80 restaurants in ${city} on Uber Eats, including 12Till12Gott, Stigbergs Pizzeria, and DINÉ Burgers - Femman , you’ll have your pick of places from which to order food online. Get food, from Fast Food to Breakfast And Brunch, from some of the best restaurants in ${city} delivered to your door. If you’d prefer to get your takeout yourself, simply browse ${city} restaurants offering pickup.`,
    },
    {
      title: `${city} restaurants that deliver`,
      subtitle: `Uber Eats helps you find food delivery and pickup options from a wide selection of places to eat in ${city}. Enter an address to browse ${city} restaurants and cafes offering food delivery. See ${city} restaurants on Uber Eats that you’ve never tried? View their menus and star ratings to help decide if you’d like to try their food.`,
    },
    {
      title: `Best food in ${city}`,
      subtitle: `On a quest to taste the best food in ${city}? Search for famous restaurants in ${city} or for your personal favorite places to eat in ${city} to see if they offer food delivery with Uber Eats. Sometimes the best food is just what you’re craving so if you know what you’d like to eat, browse ${city} restaurants that deliver by cuisine or dish.`,
    },
  ];

  return {
    props: {
      cityInfo,
      breadcrumb: breadCrumbGenerate(label),
      cityTitle: titleCaseFull('Food', city),
    },
  };
}
