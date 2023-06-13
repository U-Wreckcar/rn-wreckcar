'use client';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './CreateCopyBox.module.css';
import b_link from '../../../public/assets/img/b_link.png';
import Image from 'next/image';
import { CreateCopyButton } from './CreateCopyButton';
import { PostUTMtype } from './CreatePage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { POST_UTMS } from '@/services/async/creatUtm';
export const CreateCopyBox = ({ fullNshort }: any) => {
  const queryClient = useQueryClient();
  // const { data, isLoading } = useQuery({
  //   queryKey: ['fullNshort'],
  //   queryFn: () => {},
  //   // initialData: ' ',
  // });

  console.log(fullNshort);
  // const { isLoading, data } = useMutation(['fullNshort']);
  // console.log('로딩...', isLoading);
  // console.log(data);
  // @ts-ignore
  // const response = data?.data?.data;
  // console.log(response);

  const response: [] = [];
  return (
    <div className={styles.container_copy_box}>
      <div className={styles.copy_title}>
        <div className={styles.link_img_box}>
          <Image className={styles.link_img} src={b_link} alt="링크" />
        </div>
        <h3 className={styles.utm_url}>UTM URL</h3>
        <div className={styles.link_img_box}>
          <Image className={styles.link_img} src={b_link} alt="링크" />
        </div>
        <h3 className={styles.utm_shorten_url}>Shorten URL</h3>
      </div>
      <div>
        <div className={styles.list_container}>
          {response?.map((i: any, idx: number) => (
            <div key={idx}>
              <div className={styles.list_box}>
                <div className={styles.copy_box_number}>{idx + 1}</div>
                <div className={styles.full_box}>
                  <div className={styles.copy_box_full}>
                    <div className={styles.full_utm}>
                      <div className={styles.text_full}>{i.fullUrl}</div>
                    </div>
                    <CreateCopyButton text={i.full_url} />
                  </div>
                </div>
                <div className={styles.short_box}>
                  <div className={styles.copy_box_short}>
                    <div className={styles.short_utm}>
                      <div className={styles.text_full}>{i.shortenUrl}</div>
                    </div>
                    <CreateCopyButton text={i.shorten_url} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
