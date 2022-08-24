import { footerData } from '@/constant/pages/layout/footer.data';
import { Container } from '@/ui/container';
import {
  FooterCopyRight,
  FooterLinkList,
  FooterMobileList,
  FooterSocialList,
  LinkLanguage,
} from '@/ui/layout/footer/components';
import { FooterBottomLinkList } from '@/ui/layout/footer/components/link';

export function Footer() {
  const { linkFirst, linkSecond, linkBottom, socialList } = footerData;
  return (
    <footer className='border-1-gray mt-20 pt-[72px] pb-[88px]'>
      <Container>
        <div className='flex flex-col flex-wrap md:flex-row'>
          <FooterMobileList />
          <div className='mb:hidden block h-10'></div>
          <FooterLinkList data={linkFirst} />
          <div className='mb:hidden block h-8'></div>
          <FooterLinkList data={linkSecond}>
            <LinkLanguage />
          </FooterLinkList>
        </div>
        <hr className='my-6 h-[1px] border-none bg-[#f6f6f6] md:my-10' />
        <div className='flex flex-col md:flex-row'>
          <FooterSocialList data={socialList} />
          <div className='flex-[1_0_36px]'></div>
          <div className='flex'>
            <FooterBottomLinkList data={linkBottom} />
          </div>
        </div>
        <FooterCopyRight />
      </Container>
    </footer>
  );
}
