/** @jsxImportSource @emotion/react */

import { useUid } from '@/libs/hooks';
import { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';
import FieldContainer from './container/FieldContainer';

const Textarea = forwardRef((props: EditorType, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const {
    tab,
    rows = 1,
    textCountActive,
    error,
    sizes,
    themes,
    value,
    disabled,
    autoRaise,
    editorScroll,
    ...rest
  } = props;
  const id = props?.id ?? useUid();

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

  //
  // rasize
  useEffect(() => {
    const handleRasie = () => {
      if (value && value !== '' && ref && 'current' in ref && ref.current) {
        ref.current.style.height = 'auto';
        ref.current.style.height = ref.current.scrollHeight + 'px';
      } else if (ref && 'current' in ref && ref.current) {
        ref.current.style.height = 'auto';
      }
    };

    if (autoRaise) handleRasie();
  }, [value, ref, autoRaise]);

  return (
    <div css={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', position: 'relative' }}>
      <FieldContainer
        sizes={{ ...sizes, maxHeight: autoRaise ? 100 : 'auto' }}
        themes={themes}
        events={{ error, disabled }}
      >
        <div css={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <textarea
            ref={ref}
            id={id}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            rows={rows}
            disabled={disabled}
            onKeyPress={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (!value || (typeof value === 'string' && value.trim() === '')) e.preventDefault();
              }
            }}
            css={{
              minHeight: sizes?.minHeight ? sizes?.minHeight : '48px',
              maxHeight: autoRaise ? 100 : 'auto',
              fontSize: sizes?.inputSize ?? 15,
              padding: sizes?.padding ?? 13,
              lineHeight: 1.6,
              overflow: rows >= 2 ? 'auto' : 'visible',
              '::-webkit-scrollbar': {
                display: editorScroll ? 'flex' : rows >= 2 ? 'flex' : 'none',
                width: '4px',
                height: '4px',
              },
              '::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: '#cccccc',
                borderRadius: '100px',
              },
              '::-webkit-scrollbar-thumb:hover': { background: '#e2e2e2' },
              '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
              },
            }}
            {...rest}
          />

          {!!tab && (
            <div
              css={{
                width: 'auto',
                minHeight: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: tab.size ?? 14,
                color: tab.color ?? '#4788f4',
                whiteSpace: 'nowrap',
                padding: '5px 10px 8px 2px',
                position: 'sticky',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onClick={() => tab.onClick && tab.onClick()}
            >
              {tab.name ?? '확인'}
            </div>
          )}
        </div>
      </FieldContainer>

      {textCountActive && (
        <p css={{ color: '#aaa', fontSize: (sizes?.edgeSize as any) ?? 12, whiteSpace: 'nowrap' }}>
          {typeof props.value === 'string' ? props.value.length : 0}
          {'/' + (props.maxLength ?? '전체 길이를 전달해주세요')}
        </p>
      )}
    </div>
  );
});

export default Textarea;
