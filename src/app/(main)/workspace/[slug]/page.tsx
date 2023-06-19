'use client';
// import WChart from '../../components/workspace/WChart';
// import WSearch from '@/components/workspace/WSearch';

import { usePathname } from 'next/navigation';
import React from 'react';
import WorkSpace from '../../../../components/workspace/WorkSpace';

export default function WorkSpaceMain({
  params,
}: {
  params: { slug: string };
}) {
  const pathname = usePathname();
  return (
    <div className="">
      <WorkSpace />
    </div>
  );
}
