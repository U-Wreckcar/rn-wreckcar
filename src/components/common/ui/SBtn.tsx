'use client';
import React, { useMemo } from 'react';

type SizeType = 'sm' | 'md' | 'lg';
interface BtnPropsType {
  primary?: boolean;
  size?: SizeType;
  label?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}
const sizeProps = (size?: string) => {
  if (size === 'sm') return ' w-[50px]';
  if (size === 'md') return ' w-[81px]';
  if (size === 'lg') return ' w-[500px]';
};
export const SBtn: React.FC<BtnPropsType> = (props) => {
  const { primary, size = 'md', label, isDisabled = false, onClick } = props;

  const propsSize = sizeProps(size);

  const baseStyle = isDisabled
    ? ' bg-urc-gray-700 h-[38px] text-white border-none'
    : 'hover:bg-urc-blue-400 hover:text-white rounded-[4px] active:bg-urc-blue-800 h-[38px] ';

  const isPrimary = primary
    ? ' border-urc-blue-primary-500  border-[1px] border-solid transparent text-urc-blue-primary-500'
    : ' bg-urc-blue-primary-500 text-white ';
  return (
    <>
      <button
        className={`${baseStyle} ${propsSize} ${isPrimary}`}
        onClick={onClick}
        disabled={false}
        value={label}
      >
        {label}
      </button>
    </>
  );
};
