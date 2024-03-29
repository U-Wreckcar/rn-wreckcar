'use client';
import React, { useEffect, useState } from 'react';
import styles from './createutm.module.css';
import Image from 'next/image';
import { CreateCopyBox } from '../../../components/create/CreateCopyBox';
import { CreateUTM } from '../../../components/create/CreateUTM';
import NCBtn from '@/components/common/copy_button/NCBtn';

export default function CreateUTMPage() {
  const [resUTM, setResUTM] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      {isLoading && (
        <div className={styles.create_container}>
          <h1>새 UTM 생성하기</h1>
          <div className={styles.help_box}>
            <p className={styles.sub_title}>
              UTM은 한번에 5개까지 생성할 수 있습니다.
            </p>
            {/* <div className={styles.hlep_text}>
            ❓ UTM 생성을 어떻게 해야할 지 모르겠다면
            <Link
              href={
                "https://unexpected-ceder-0b7.notion.site/0a3db0d8103f4be2855a23186fc1b5e3"
              }
              target='_blank'>
              {" "}
              가이드보기{" "}
            </Link>
          </div> */}

            <p className={styles.help_text}>*는 필수 입력 값입니다.</p>
          </div>

          <CreateUTM setResUTM={setResUTM} resUTM={resUTM} />
          <div className={styles.copy_help_box}>
            <p>{''}</p>
            <p className={styles.copy_help}>
              Shorten URL을 사용하시면 유렉카를 통해 간단한 트래킹 결과를
              확인하실 수 있습니다.
            </p>
          </div>
          <NCBtn copyData="copy success" isPrimary={false}>
            copy
          </NCBtn>
          <CreateCopyBox resUTM={resUTM} />
        </div>
      )}
    </>
  );
}
