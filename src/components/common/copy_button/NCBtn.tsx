import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { clipBoardHandle } from '../util/clipBoard';
import { SBtn } from '../ui/SBtn';

interface CopyDataType {
  copyData: string;
  children?: React.ReactNode;
  setIsCopy?: any;
  isPrimary: boolean;
}
export default function NCBtn({ copyData, isPrimary }: CopyDataType) {
  const [isCopy, setIsCopy] = useState(false);
  console.log(isPrimary);
  const copyHandle = () => {
    clipBoardHandle(copyData);
    setIsCopy(!isCopy);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <>
      {isPrimary ? (
        <SBtn onClick={copyHandle} primary label={'복사버튼'} />
      ) : (
        <SBtn onClick={copyHandle} primary={true} label={'복사버튼'} />
      )}
      {/* <Tooltip title={isCopy === false ? ' CLICK COPY!' : 'SUCCESS COPY!'}> */}
      {/* </Tooltip> */}
    </>
  );
}
