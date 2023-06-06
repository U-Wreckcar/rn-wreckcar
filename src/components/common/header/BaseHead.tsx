'use client';
import React, { useEffect, useState } from 'react';
import { INoti, IProfile } from '../icon/Icon';
import { GET_USER } from '@/services/async/user';

export default function BaseHead() {
  const [userData, setResponse] = useState<UserData>();
  const getUserHandle = async () => {
    const response = await GET_USER();
    const data = response.data.data;
    setResponse(data);
  };
  useEffect(() => {
    getUserHandle();
  }, []);
  return (
    <div
      className="
        flex h-[60px] w-full 
        items-center 
        justify-between
        gap-5 px-7"
    >
      <div className="flex shrink-0 items-center gap-2 ">
        <INoti bnw={'b'} w={16} h={16} />
        유렉카는 계속 발전합니다!
      </div>
      <div className="mr-6 flex shrink-0 items-center gap-2 ">
        <IProfile />
        <div>{userData?.name} 님</div>
      </div>
    </div>
  );
}
