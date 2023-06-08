import React from 'react';
import { CircularProgress } from '@mui/material';
interface LoadingType {
  children: React.ReactNode;
}
export default function Loading({ children }: LoadingType) {
  return (
    <div
      className="
      absolute left-[-120px] top-[-100px] 
      flex h-[220px] w-[320px] flex-col items-center
    justify-center gap-6 rounded-[4px] bg-white shadow-xl"
    >
      <CircularProgress disableShrink size={100} />
      <div className="text-xl font-bold">{children}</div>
    </div>
  );
}
