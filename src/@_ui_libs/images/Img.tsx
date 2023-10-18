/** @jsxImportSource @emotion/react */
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  size?: {
    width?: 'auto' | '100%' | string;
    minWidth?: number;
    maxWidth?: number;
    height?: 'auto' | '100%';
    minHeight?: number;
    maxHeight?: number;
  };
  objectFit?: 'cover' | 'contain' | 'fill';
  borderRadius?: number | string;
}

export function Img({
  src,
  alt,
  width = 500,
  height = 500,
  size,
  objectFit = 'cover',
  borderRadius = 18,
  ...props
}: Props) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        loading="lazy"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        width={width}
        height={height}
        css={{
          width: size?.width ? size?.width : '100%',
          height: size?.height ? size?.height : 'auto',
          minWidth: `${size?.minWidth}px`,
          maxWidth: `${size?.maxWidth}px`,
          minHeight: `${size?.minHeight}px`,
          maxHeight: `${size?.maxHeight}px`,
          objectFit: objectFit,
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        }}
        {...props}
      />
    </>
  );
}
