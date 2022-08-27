import {
  breadCrumbGenerate,
  capitalizeCity,
  titleCaseFull,
} from '@/lib/helper';

export async function getServerSideProps(context: any) {
  const { label, sublabel } = context.params;

  return {
    props: {
      breadcrumb: breadCrumbGenerate(label, sublabel),
      title: titleCaseFull(sublabel, capitalizeCity(label)),
    },
  };
}
