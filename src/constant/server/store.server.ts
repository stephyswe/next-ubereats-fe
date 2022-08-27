import { breadCrumbGenerate } from '@/lib/helper';

export async function getServerSideProps(context: any) {
  const { label } = context.params;
  return {
    props: {
      breadcrumb: breadCrumbGenerate('göteborg-västra-götaland', label),
    },
  };
}
