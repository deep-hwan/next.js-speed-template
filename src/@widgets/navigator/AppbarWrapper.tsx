import { mySite } from '@/libs/site/site';
import { MQ } from '@/libs/themes';

export const AppbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='appbar-container-layer' css={{ ...extanded_t.size, ...extanded_t.padding, ...extanded_t.flex }}>
      <div
        className='appbar-wrapper'
        css={{
          zIndex: 1000,
          ...extanded_t.position,
          ...extanded_t.padding,
          ...extanded_t.flex,
          ...extanded_t.size,
        }}
      >
        <header
          itemScope
          itemType='https://schema.org/WebSite'
          className='appbar'
          css={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            transition: 'all 0.2s ease-in-out',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(5px)',
            [MQ[2]]: { padding: '0 20px 0 25px', background: 'transparent' },
          }}
        >
          <link itemProp='url' href={mySite.imageUrl} />
          <meta itemProp='name' content={mySite.title} />
          <strong
            aria-hidden='true'
            css={{
              width: '0px',
              height: '0px',
              clip: 'rect(0 0 0 0)',
              clipPath: 'inset(50%)',
              position: 'absolute',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {mySite.title}
          </strong>

          {children}
        </header>
      </div>
    </div>
  );
};

const extanded_t = {
  padding: {
    paddingTop: 'env(safe-area-inset-top)',
    paddingRight: 'env(safe-area-inset-right)',
    paddingLeft: 'env(safe-area-inset-left)',
  },
  flex: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  position: { position: 'fixed', top: 0, left: 0, right: 0 },
  size: {
    width: '100%',
    height: 80,
    minHeight: 80,
    maxHeight: 8,
    transition: 'all 0.2s ease-in-out',
    [MQ[2]]: {
      height: 60,
      minHeight: 60,
      maxHeight: 60,
    },
  },
} as const;
