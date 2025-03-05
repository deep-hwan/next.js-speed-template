import { useSafeArea } from '@/libs/hooks';
import { menus } from '@/libs/site/menus';
import { colors, fontSize } from '@/libs/themes';
import { Flex, Padding, Spacing, Text } from 'dble-layout';
import Link from 'next/link';

//
export default function Footer() {
  const { bottom: pb, right: pr, left: pl } = useSafeArea({ bottom: 80, right: 30, left: 30 });

  return (
    <footer
      css={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        paddingBottom: pb,
        paddingInlineStart: pl,
        paddingInlineEnd: pr,
        borderTop: '1px solid #eee',
      }}
    >
      <Flex maxW={800} itemScope itemType='https://schema.org/Organization'>
        <Flex as='ul' direc='row' gap='16px 30px' _mq={{ w768: { direc: 'column' } }}>
          {menus?.map((item, i: number) => (
            <Padding as='li' w='auto' vertical={5} key={i}>
              <Link href={item.url} css={{ userSelect: 'none', fontSize: fontSize.s14, color: colors.grey[500] }}>
                {item.name}
              </Link>
            </Padding>
          ))}
        </Flex>

        <Spacing size={32} />

        <Flex itemScope itemType='https://schema.org/Organization'>
          <div css={{ fontStyle: 'normal', fontSize: 13, color: '#888' }}>
            <Text as='h2' itemProp='name' size={16} color={'#97989a'}>
              DBLE
            </Text>

            <Spacing size={14} />

            <Text size={12} color='#888' itemProp='name'>
              <span itemProp='name'>이게디자인 (정재환)</span> | 692-05-02175
            </Text>

            <Spacing size={4} />

            <address
              id='address'
              itemProp='address'
              itemScope
              itemType='https://schema.org/PostalAddress'
              css={{ display: 'flex', flexdirec: 'row', gap: '8px' }}
            >
              <Link href='mailto:deep@deepcomu.com' css={{ color: '#888' }}>
                이메일 : deep@deepcomu.com
              </Link>
              {/* <span>|</span>
              <Link href='tel:07040077561' css={{ color: '#888' }}>
                tel : 070-1234-5678
              </Link> */}
            </address>

            <Spacing size={4} />

            <span>
              주소 : <span itemProp='addressLocality'>서울특별시</span> <span itemProp='addressRegion'>강남구</span>{' '}
              <span itemProp='streetAddress'>도곡로84길 6, 디블에이전시</span>
            </span>
          </div>
        </Flex>
      </Flex>
    </footer>
  );
}
