'use client';
import React, { SetStateAction, useState } from 'react';
import { CreateUTM } from './CreateUTM';
import { CreateCopyBox } from './CreateCopyBox';
export interface PostUTMtype {
  fullUrl: string;
  shortenUrl: string;
}
export default function CreatePage() {
  const [utmData, setutmData] = useState<PostUTMtype[]>([]);

  return (
    <div>
      <CreateUTM setutmData={setutmData} />
      {/* <div className={styles.copy_help_box}> */}
      {/* <p className={styles.copy_help}> */}
      Shorten URL을 사용하시면 유렉카를 통해 간단한 트래킹 결과를 확인하실 수
      있습니다.
      {/* </p> */}
      {/* </div> */}
      <CreateCopyBox utmData={utmData} />
    </div>
  );
}
