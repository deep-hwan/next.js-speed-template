/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode, useCallback, useState } from 'react';
import { GlobalInputTheme } from './input';

type Types = {
  children: ReactNode;

  edge?: ReactNode;
  tab?: TabType;
  tabId?: string;

  sizes?: InputSizesType;
  themes?: ThemesType;
  events?: {
    error?: ErrorType;
    disabled?: boolean;
  };
};

function FieldContainer(props: Types) {
  const { children, edge, tab, tabId, sizes, themes, events } = props;
  const { disabled } = events ?? {};
  const error = events?.error?.error;

  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    if (!disabled) setFocus(true);
  };
  const handleBlur = () => {
    if (!disabled) setFocus(false);
  };

  const inputEdgeColor = () => {
    if (disabled) return themes?.disabled?.edgeColor ?? '#999';
    if (error) return themes?.error?.edgeColor ?? '#999';
    if (focus && !error) return themes?.focus?.edgeColor ?? '#999';
    return themes?.default?.edgeColor ?? '#888';
  };

  const borderColor = () => {
    if (disabled) return themes?.disabled?.borderColor ?? '#eee';
    if (error) return themes?.error?.borderColor ?? '#FF6767';
    if (focus && !error) return themes?.focus?.borderColor ?? '#b9d0e4';
    return themes?.default?.borderColor ?? '#e0e0e0';
  };

  const backgroundColor = () => {
    if (disabled) return themes?.disabled?.backgroundColor ?? '#f5f5f5';
    if (error) return themes?.error?.backgroundColor ?? '#fffbfb';
    if (focus && !error) return themes?.focus?.backgroundColor ?? '#f8f9fc';
    return themes?.default?.backgroundColor ?? '#fff';
  };

  const colorTheme = () => {
    if (focus && !error) return themes?.focus?.txtColor ?? '#555';
    if (disabled) return themes?.disabled?.txtColor ?? '#797979';
    if (error) return themes?.error?.txtColor ?? '#555';
    return themes?.default?.txtColor ?? '#555';
  };

  const placeholderTheme = () => {
    if (disabled) return themes?.disabled?.placeholderColor ?? '#c2c2c2';
    if (error) return themes?.error?.placeholderColor ?? '#c2c2c2';
    if (focus && !error) return themes?.focus?.placeholderColor ?? '#c2c2c2';
    return themes?.default?.placeholderColor ?? '#c2c2c2';
  };

  const handleClick = useCallback(() => {
    if (tab?.onClick && !tab.disabled) {
      tab.onClick();
    }
  }, [tab]);

  return (
    <div
      className='input-field-container-theme'
      onFocus={handleFocus}
      onBlur={handleBlur}
      css={[
        {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          width: sizes?.width ?? '100%',
          minWidth: sizes?.minWidth,
          maxWidth: sizes?.maxWidth,
          height: sizes?.height ?? '100%',
          minHeight: sizes?.minHeight ?? 50,
          maxHeight: sizes?.maxHeight,
          borderRadius: !sizes?.borderBottom ? (sizes?.borderRadius ?? 14) : 0,
          backgroundColor: backgroundColor(),
          border: !sizes?.borderBottom ? `1px solid ${borderColor()}` : 'none',
          borderBottom: sizes?.borderBottom,
          transition: '0.3s ease-in-out',
        },
        css`
          input {
            color: ${colorTheme()};
            font-size: ${sizes?.inputSize ?? 15}px;
            padding: ${sizes?.padding ?? '13px'};
            ::placeholder {
              color: ${placeholderTheme()};
              font-size: ${sizes?.inputSize ?? 15}px;
            }
            ${fieldThemes}
            ${GlobalInputTheme() as any}
          }

          select {
            cursor: pointer;
            color: ${colorTheme()};
            font-size: ${sizes?.inputSize ?? 15}px;
            padding: ${sizes?.padding ?? '13px'};
            ::placeholder {
              color: ${placeholderTheme()};
              font-size: ${sizes?.inputSize ?? 15}px;
            }
            ${fieldThemes}
            ${GlobalInputTheme() as any}
          }

          textarea {
            color: ${colorTheme()};

            ::placeholder {
              color: ${placeholderTheme()};
              font-size: ${sizes?.inputSize ?? 15}px;
            }
            ${fieldThemes}
          }
        `,
      ]}
    >
      {children}

      {!!tab && (
        <button
          type='button'
          id={tabId}
          onClick={handleClick}
          css={{
            fontSize: tab.size ?? 14,
            color: tab.color ?? '#4788f4',
            whiteSpace: 'nowrap',
            padding: '8px 10px 8px',
            position: 'sticky',
            userSelect: 'none',
            border: 'none',
            outline: 'none',
            transition: '0.2 ease-in-out',
            '&:hover': { opacity: 0.8 },
            '&:active': { opacity: 0.6 },
            '&:disabled': { color: '#ccc' },
          }}
          disabled={tab.disabled}
        >
          {tab.name ?? '확인'}
        </button>
      )}

      {!!edge && (
        <div
          css={{
            padding: '8px 10px 8px',
            fontSize: sizes?.edgeSize ?? 13,
            color: inputEdgeColor(),
            whiteSpace: 'nowrap',
          }}
        >
          {edge}
        </div>
      )}
    </div>
  );
}

const fieldThemes = css`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  resize: none;
  background-color: transparent;
  background: transparent;
  background-image: none;
  background-repeat: no-repeat;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: 0.3s ease-in-out;
`;

export default FieldContainer;
