import { mySite } from '@/libs/site/site';
import { MQ } from '@/libs/themes';
import { CSSObject } from '@emotion/react';

export const AppbarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='appbar-container-layer' css={{ ...size_style, ...padding_style, ...flex_style }}>
      <div
        className='appbar-wrapper'
        css={{
          zIndex: 1000,
          ...size_style,
          ...position_style,
          ...padding_style,
          ...flex_style,
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
          <div itemScope itemType='https://schema.org/WebSite' css={noShow_style}>
            <link itemProp='url' href={mySite.url} />
            <meta itemProp='name' content={mySite.name} />
            <meta itemProp='alternateName' content={mySite.title} />
          </div>

          <strong aria-hidden='true' css={noShow_style}>
            {mySite.title}
          </strong>

          {children}
        </header>
      </div>
    </div>
  );
};

const flex_style: CSSObject = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

const position_style: CSSObject = { position: 'fixed', top: 0, left: 0, right: 0 };

const size_style: CSSObject = {
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
};

const padding_style: CSSObject = {
  paddingTop: 'env(safe-area-inset-top)',
  paddingRight: 'env(safe-area-inset-right)',
  paddingLeft: 'env(safe-area-inset-left)',
};

const noShow_style: CSSObject = {
  width: '0px',
  height: '0px',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  position: 'absolute',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};
