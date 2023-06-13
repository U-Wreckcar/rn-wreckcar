'use client';
import React, { useEffect, useState } from 'react';

type SizeType = 'sm' | 'md' | 'lg';
type ColorType = 'white' | 'blue';

interface BtnPropsType {
  onClick?: any;
  size: SizeType;
  color: ColorType;
  children: string;
}
export const SBtn: React.FC<BtnPropsType> = (props) => {
  const { onClick, size, children, color } = props;
  const [cusSize, setCusSize] = useState<SizeType>('md');

  useEffect(() => {
    setCusSize(size);
  }, [size]);
  return (
    <>
      <button
        className={
          'bg-urc-blue-primary-500 h-[38px] rounded-[4px] ' +
          ((cusSize === 'sm' && ' w-[50px] ') ||
            (cusSize === 'md' && 'w-[81px]') ||
            (cusSize === 'lg' && ' w-[500px] ')) +
          (color === 'white'
            ? ''
            : ' hover:bg-hblue active:bg-blue translate text-white duration-150')
        }
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
