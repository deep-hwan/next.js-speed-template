/** @jsxImportSource @emotion/react */

import { ReactNode } from 'react';

export function PopupImageWrapper({ children, onCancel }: { children: ReactNode; onCancel: () => void }) {
  return (
    <>
      <div
        css={{
          zIndex: 99997,
          display: 'flex',
          flex: 1,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          backgroundColor: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: `max(0px, env(safe-area-inset-top))`,
          paddingBottom: `max(0px, env(safe-area-inset-bottom))`,
          paddingLeft: `max(0px, env(safe-area-inset-left))`,
          paddingRight: `max(0px, env(safe-area-inset-right))`,
        }}
      />

      <div
        className='zoom-pop-wrap'
        css={{
          zIndex: 999998,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          padding: '50px 10px',
        }}
      >
        <div
          className='zoom-image-pop-up'
          css={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </div>

        <div
          className='modal-pop-up-cancel-tab'
          onClick={onCancel}
          css={{
            zIndex: 99999,
            position: 'absolute',
            top: 0,
            right: 0,
            padding: 20,
            cursor: 'pointer',
          }}
        >
          <svg width='15' height='15' viewBox='0 0 22 22'>
            <path
              d='M21.6012 19.5219L13.0366 10.9788L13.1438 10.8716L21.531 2.48794C21.8007 2.20976 21.9515 1.83762 21.9515 1.45029C21.9515 1.06295 21.8007 0.690813 21.531 0.412635C21.2498 0.146036 20.8765 -0.00177625 20.489 1.61119e-05C20.1014 0.00180847 19.7295 0.153067 19.4507 0.422256L10.97 8.91587L2.49348 0.425004C2.21198 0.157781 1.83779 0.0100522 1.44959 0.0128715C1.06138 0.0156908 0.689389 0.168839 0.411802 0.440122C0.145492 0.718691 -0.00116825 1.09038 0.00320011 1.47566C0.00756848 1.86094 0.162619 2.22922 0.435176 2.50168L8.91724 10.9761L0.424176 19.4752C0.15237 19.7508 0 20.1223 0 20.5094C0 20.8964 0.15237 21.2679 0.424176 21.5436C0.707239 21.8064 1.08019 21.951 1.46651 21.9477C1.85283 21.9443 2.22323 21.7934 2.50173 21.5257L10.9824 13.0623L19.47 21.5326C19.6032 21.6745 19.7634 21.7884 19.9411 21.8677C20.1189 21.947 20.3107 21.9901 20.5053 21.9944C20.6976 22.0127 20.8915 21.9862 21.0718 21.917C21.2522 21.8479 21.4141 21.7379 21.5448 21.5958C21.8253 21.3277 21.9886 20.9599 21.9994 20.5721C22.0102 20.1843 21.8676 19.808 21.6025 19.5246'
              fill='#ccc'
            />
          </svg>
        </div>
      </div>
    </>
  );
}
