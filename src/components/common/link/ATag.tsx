import Link from 'next/link';
import React from 'react';
interface PropsType {
  href: string;
  isBlank: boolean;
  children: React.ReactNode;
}

const ATag: React.FC<PropsType> = ({ children, href, isBlank }) => {
  return (
    <Link
      href={`${href}`}
      target={isBlank ? '_blank' : 'none'}
      as="/management"
    >
      {children}
    </Link>
  );
};

export default ATag;
