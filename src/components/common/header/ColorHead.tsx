import React from 'react';
import { ILogo } from '../icon/Icon';
import ATag from '../link/ATag';

export default function ColorHead() {
  return (
    <div className="bg-urc-blue-900 flex h-[60px] w-screen items-center justify-between gap-10 px-[140px]  text-white">
      <ATag href={'/'} isBlank={false}>
        <ILogo />
      </ATag>
      <div className="hidden shrink-0 flex-row gap-4 sm:flex">
        <ATag href={'/signin'} isBlank={false}>
          <div className="user  ">로그인 </div>
        </ATag>
        /
        <ATag href={'/signup'} isBlank={false}>
          <div className="sign shrink-0">회원가입</div>
        </ATag>
      </div>
    </div>
  );
}
