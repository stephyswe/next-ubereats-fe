import { footerData } from '@/pages/_app/footer.data';
import { Container } from '@/ui/container';

import {
  FooterBottom,
  FooterCopyright,
  FooterLink,
  FooterMobile,
  FooterSocial,
  LinkLanguage,
} from './components';

export function Footer() {
  const { firstRow, secondRow, bottom, social } = footerData;
  return (
    <footer className='border-1-gray mt-10 p-[72px_0px_88px] md:mt-20'>
      <Container>
        <div className='flex flex-col flex-wrap md:flex-row'>
          <FooterMobile />
          <div className='mb:hidden block h-10'></div>
          <FooterLink data={firstRow} />
          <div className='mb:hidden block h-8'></div>
          <FooterLink data={secondRow}>
            <LinkLanguage />
          </FooterLink>
        </div>
        <hr className='my-6 h-[1px] border-none bg-[#f6f6f6] md:my-10' />
        <div className='flex flex-col md:flex-row'>
          <FooterSocial data={social} />
          <div className='flex-[1_0_36px]'></div>
          <div className='flex'>
            <FooterBottom data={bottom} />
          </div>
        </div>
        <FooterCopyright />
      </Container>
    </footer>
  );
}
