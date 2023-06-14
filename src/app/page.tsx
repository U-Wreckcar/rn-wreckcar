import HomeLayout from '../components/render/HomeLayout';
import React from 'react';
import { SBtn } from '@/components/common/ui/SBtn';

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll pb-[60px]">
      <HomeLayout />
    </div>
  );
}
