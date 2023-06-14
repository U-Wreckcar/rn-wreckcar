'use client';
import React, { useMemo } from 'react';

type SizeType = 'sm' | 'md' | 'lg';
interface BtnPropsType {
  primary?: boolean;
  size?: SizeType;
  children?: string;
  label?: string;
  onClick: () => void;
}
const sizeProps = (size?: string) => {
  if (size === 'sm') return ' w-[50px]';
  if (size === 'md') return ' w-[81px]';
  if (size === 'lg') return ' w-[500px]';
};
export const SBtn: React.FC<BtnPropsType> = (props) => {
  const { primary, size = 'md', children, onClick } = props;

  const propsSize = sizeProps(size);

  const baseStyle =
    'hover:bg-urc-blue-400 hover:text-white rounded-[4px] active:bg-urc-blue-800 h-[38px] ';

  const isPrimary = primary
    ? ' border-urc-blue-primary-500  border-[1px] border-solid transparent text-black'
    : ' bg-urc-blue-primary-500 text-white ';
  return (
    <>
      <button
        className={`${baseStyle} ${propsSize} ${isPrimary}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
