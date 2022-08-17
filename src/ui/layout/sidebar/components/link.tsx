import { Link } from '@/components';

export const SidebarLinkList = ({ data }: { data: SideBarLinkItemProps[] }) => (
  <div className='mb-6 mt-6 flex flex-col'>
    <ul>
      {data.map((link: SideBarLinkItemProps) => (
        <SidebarLinkItem key={link.title} {...link} />
      ))}
    </ul>
  </div>
);

type SideBarLinkItemProps = { title: string; link: string };

const SidebarLinkItem = ({ title, link }: SideBarLinkItemProps) => (
  <li className='mb-4'>
    <Link
      href={link}
      className='my-3 font-uberMoveText text-sm font-medium leading-4'
    >
      {title}
    </Link>
  </li>
);
