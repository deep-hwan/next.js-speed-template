/** @jsxImportSource @emotion/react */
import React, { useRef, ChangeEvent } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import Image from 'next/image';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface ProfileUploadBoxProps {
  imageOnload: (base64: string | ArrayBuffer | null) => void;
  uploadCancel: () => void;
  image: string;
  alt?: string;
  size?: number;
}

//
export function ProfileUploadBox({
  size = 100,
  image,
  alt = '업로드 이미지',
  imageOnload,
  uploadCancel,
}: ProfileUploadBoxProps) {
  const uploadRef = useRef<HTMLInputElement>(null);

  const encodeFileToBase64 = (fileBlob: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    reader.onload = () => {
      imageOnload(reader.result);
    };

    // If you want to handle errors
    reader.onerror = (error) => {
      console.error('File reading error:', error);
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      encodeFileToBase64(e.target.files[0]);
    }
  };

  return (
    <div
      css={{
        display: 'flex',
        position: 'relative',
        maxWidth: `${size}px`,
        minWidth: `${size}px`,
        maxHeight: `${size}px`,
        minHeight: `${size}px`,
        cursor: 'pointer',
        transition: '0.3s ease-in-out',
      }}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={alt}
            width={1000}
            height={1000}
            onClick={() => uploadRef.current?.click()}
            css={{
              maxWidth: `${size}px`,
              minWidth: `${size}px`,
              maxHeight: `${size}px`,
              minHeight: `${size}px`,
              borderRadius: '10000px',
              objectFit: 'cover',
            }}
          />
          <button
            type="button"
            onClick={uploadCancel}
            css={theme.cancelTab as Interpolation<Theme>}
          >
            <CancelIcon />
          </button>
        </>
      ) : (
        <div
          css={{
            maxWidth: `${size}px`,
            minWidth: `${size}px`,
            maxHeight: `${size}px`,
            minHeight: `${size}px`,
            backgroundColor: '#f8f8f8',
            borderRadius: '10000px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.3s ease-in-out',
          }}
        >
          <CameraIcon size={size} />
        </div>
      )}

      <input
        ref={uploadRef}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        css={theme.input as Interpolation<Theme>}
      />
    </div>
  );
}

// -----------------------------------
// -------------- Icons --------------
// -----------------------------------
const CameraIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={`${size / 3}px`}
      id="carmera-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46 36.8"
    >
      <path
        id="패스_16850"
        data-name="패스 16850"
        d="M30.419,24.81A7.419,7.419,0,1,1,23,17.521,7.363,7.363,0,0,1,30.419,24.81ZM46,14.46v20.7a5.043,5.043,0,0,1-5.087,5H5.087a5.043,5.043,0,0,1-5.087-5V14.46a5.043,5.043,0,0,1,5.087-5h6.256V7.733A4.412,4.412,0,0,1,15.794,3.36H30.206a4.412,4.412,0,0,1,4.451,4.373V9.461h6.256A5.045,5.045,0,0,1,46,14.46ZM34.234,24.81A11.235,11.235,0,1,0,23,35.847,11.149,11.149,0,0,0,34.234,24.81Z"
        transform="translate(0 -3.36)"
        fill="#cccccc"
      />
    </svg>
  );
};

const CancelIcon = () => {
  return (
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
      <path
        id="xIcon"
        d="M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526"
        transform="translate(-4.141 -4.142)"
        fill="#cccccc"
      />
    </svg>
  );
};

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const theme = {
  input: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    cursor: 'pointer',
  },

  cancelTab: {
    maxWidth: '28px',
    minWidth: '28px',
    maxHeight: '28px',
    minHeight: '28px',
    zIndex: '10',
    position: 'absolute',
    bottom: '0',
    right: '0',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e2e2',
    borderRadius: '100000px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
