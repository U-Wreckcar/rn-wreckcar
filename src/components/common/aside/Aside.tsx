'use client';
import React, { useState } from 'react';
import Base from './BaseSide';
import Slim from './SlimSide';

export default function Aside() {
  const [folding, setFolding] = useState(true);
  const slimHandle = () => {
    setFolding(!folding);
  };
  return (
    <>
      {folding ? (
        <Base slimHandle={slimHandle} />
      ) : (
        <Slim slimHandle={slimHandle} />
      )}
    </>
  );
}
