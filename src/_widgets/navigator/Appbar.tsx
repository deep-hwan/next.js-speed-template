import { appDrawerAtom } from '@/app/_layout/atoms/app-atom';
import { ToastIcon } from '@/libs/assets/icon-stroke';
import { mySite } from '@/libs/site/site';
import { MQ } from '@/libs/themes';
import { Flex, TouchableOpacity } from 'dble-layout';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { AppbarWrapper } from './AppbarWrapper';
import { Navbar } from './Navbar';

export const Appbar = () => {
  const [isDrawer, setIsDrawer] = useRecoilState<boolean>(appDrawerAtom);

  return (
    <AppbarWrapper>
      <Link href='/' itemProp='url' className='home-navigation' aria-label={mySite.title}>
        <img
          className='app-logo'
          src='/assets/favicons/favicon.png'
          alt='디블'
          width={30}
          height='auto'
          css={{ [MQ[2]]: { width: '24px' } }}
        />
      </Link>

      <Navbar />

      <Flex w='auto' direc='row' align='center' gap={15}>
        <TouchableOpacity
          onClick={() => setIsDrawer(!isDrawer)}
          css={{ display: 'none', [MQ[2]]: { display: 'flex' } }}
        >
          <ToastIcon />
        </TouchableOpacity>
      </Flex>
    </AppbarWrapper>
  );
};
