/** @jsxImportSource @emotion/react */
import { ChangeEvent, ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';

import { useUid } from '@/libs/hooks';
import FieldContainer from './container/FieldContainer';

const NumbericField = forwardRef(
  (
    { error, edge, disabled, value, onChange, sizes, themes, ...props }: NumbericType,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const id = props?.id ?? useUid();

    const [displayValue, setDisplayValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
    const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

    useEffect(() => {
      let formattedValue = '0';
      if (typeof value === 'number') formattedValue = value.toLocaleString();
      else if (value === '') formattedValue = '';
      else if (/^\d*\.?\d*$/.test(value?.toString() ?? '')) {
        formattedValue = parseFloat(value?.toString() ?? '').toLocaleString();
        setDisplayValue(formattedValue);
      }
    }, [value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value.replace(/,/g, '');

      if (rawValue === '') {
        setDisplayValue('');
        onChange?.({ ...e, target: { ...e.target, value: '' } });
      } else if (/^\d*\.?\d*$/.test(rawValue)) {
        setDisplayValue(rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        onChange?.({ ...e, target: { ...e.target, value: rawValue } });
      } else {
        setDisplayValue('');
        onChange?.({ ...e, target: { ...e.target, value: '0' } });
      }
    };

    return (
      <FieldContainer edge={edge} sizes={sizes} themes={themes} events={{ disabled }}>
        <input
          ref={ref}
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={displayValue}
          onChange={handleInputChange}
          disabled={disabled}
          autoComplete='off'
          {...props}
        />
      </FieldContainer>
    );
  }
);

export default NumbericField;
