'use client'
// import WChart from '../../components/workspace/WChart';
// import WSearch from '@/components/workspace/WSearch';

import { usePathname } from 'next/navigation';
import React from 'react';
import WorkSpace from '../../../../components/workspace/WorkSpace';

export default function WorkSpaceMain({ params }: { params: { slug: string } }) {
    console.log(params)
    const pathname = usePathname()
    console.log(pathname)
    console.log()
    return (
        <div className=''>
            <WorkSpace />
        </div>
    );
}

