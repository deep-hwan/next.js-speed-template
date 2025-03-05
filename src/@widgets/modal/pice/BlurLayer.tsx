/** @jsxImportSource @emotion/react */
import { memo } from 'react';

const BlurLayer = memo(({ zIndex }: { zIndex?: number }) => {
  return (
    <div
      css={{
        zIndex: zIndex ?? 9900,
        display: 'flex',
        flex: 1,
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: 'rgba(0,0,0,0.35)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overscrollBehavior: 'contain',
        paddingTop: `max(0px, env(safe-area-inset-top))`,
        paddingBottom: `max(0px, env(safe-area-inset-bottom))`,
        paddingLeft: `max(0px, env(safe-area-inset-left))`,
        paddingRight: `max(0px, env(safe-area-inset-right))`,
      }}
    />
  );
});

export default BlurLayer;
