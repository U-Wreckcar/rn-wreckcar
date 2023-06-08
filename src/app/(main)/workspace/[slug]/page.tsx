'use client';
import WorkSpace from '../../../../components/workspace/WorkSpace';
import { usePathname } from 'next/navigation';
import React from 'react';

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
