/** @jsxImportSource @emotion/react */
import { useUid } from '@/libs/hooks';
import { ChangeEvent, ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';
import FieldContainer from './container/FieldContainer';

const PhoneNumberField = forwardRef(
  (
    {
      disabled = false,
      value: externalValue,
      onChange: externalOnChange,
      error,
      sizes,
      themes,
      tab,
      ...props
    }: PhoneNumberType,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const id = props?.id ?? useUid();

    const [internalValue, setInternalValue] = useState<string>(String(externalValue) || '');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
    const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

    // 외부에서 전달된 value 값이 변경되면, 내부 state도 업데이트합니다.
    useEffect(() => {
      if (externalValue) setInternalValue(String(externalValue));
    }, [externalValue]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputVal = e.target.value.trim().replace(/[^0-9]/g, '');
      let formattedVal = inputVal;

      if (inputVal.length === 9) formattedVal = inputVal.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
      else if (inputVal.length === 10) formattedVal = inputVal.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
      else if (inputVal.length === 11) formattedVal = inputVal.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

      setInternalValue(formattedVal);

      const newEvent = {
        ...e,
        target: { ...e.target, value: formattedVal },
      } as ChangeEvent<HTMLInputElement>;

      if (externalOnChange) externalOnChange(newEvent);
    };

    return (
      <FieldContainer sizes={sizes} themes={themes} events={{ error, disabled }} tab={tab} tabId={`${id}-button`}>
        <input
          ref={ref}
          id={id}
          type='text'
          autoComplete='off'
          maxLength={13}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={internalValue}
          disabled={disabled}
          onChange={handleInputChange}
          {...props}
        />
      </FieldContainer>
    );
  }
);

export default PhoneNumberField;
