import { useUid } from '@/libs/hooks';
import React, { forwardRef, useCallback, useState } from 'react';
import FieldContainer from './container/FieldContainer';

const TextField = forwardRef<HTMLInputElement, FieldType>((props, ref) => {
  const { disabled = false, numberType = 'int', tab, value, error, edge, sizes, themes, ...rest } = props;
  const id = props?.id ?? useUid();

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = useCallback(() => setIsFocused(true), [isFocused]);
  const handleBlur = useCallback(() => setIsFocused(false), [isFocused]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'number') {
      let { value } = event.target;

      if (numberType === 'int') {
        const newValue = value.replace(/[^0-9]/g, '');
        if (props.maxLength && newValue.length > props.maxLength)
          event.target.value = newValue.slice(0, props.maxLength);
        else event.target.value = newValue;
      } else if (numberType === 'double') {
        // Handle double type if needed
      }
    }

    props.onChange?.(event);
  };

  return (
    <FieldContainer
      edge={edge}
      tab={tab}
      sizes={sizes}
      themes={themes}
      events={{ error, disabled }}
      tabId={`${id}-button`}
    >
      <input
        id={id}
        ref={ref} // Ensure ref is forwarded directly to the input element
        value={value}
        onChange={handleInput}
        onKeyPress={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (!value || (typeof value === 'string' && value.trim() === '')) e.preventDefault();
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            document.getElementById(`${id}-button`)?.click();
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        {...rest}
      />
    </FieldContainer>
  );
});

export default TextField;
