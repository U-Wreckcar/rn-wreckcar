'use client';
import { SBtn } from '@/components/common/ui/SBtn';
import { SModal } from '@/components/common/ui/SModal';
import React, { useState } from 'react';
import { set } from 'react-hook-form';

export default function WorkspacePage() {
  const [iso, setIso] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIso(!iso);
        }}
      >
        buttondddd
      </button>
      <SModal
        width={'w-[1000px]'}
        height={'h-[500px]'}
        iso={iso}
        setIso={setIso}
      />
      <p>workspace 생성하기</p>
    </>
  );
}
