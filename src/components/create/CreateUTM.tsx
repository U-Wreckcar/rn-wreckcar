'use client';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import styles from './CreateUTM.module.css';
import plus from '../../../public/assets/img/plus.png';
import minus from '../../../public/assets/img/minus.png';
import Image from 'next/image';
import { BlueButton } from '../common/blue_button/BlueButton';
import { CreateCategory } from './CreateCategory';
import Alert from '../common/blue_button/Alert';
import { Tooltip } from '@mui/material';
import Loading from '../common/popup/Loading';
import { POST_UTMS } from '@/services/async/creatUtm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setEnvironmentData } from 'worker_threads';
import { PostUTMtype } from './CreatePage';
import { CreateCopyBox } from './CreateCopyBox';
export type UTMsType = {
  data: {
    url?: string;
    campaignId?: string;
    source?: string;
    medium?: string;
    campaignName?: string | null;
    content?: string | null;
    term?: string | null;
    memo?: string | null;
  }[];
};
interface CreateBoxProps {
  setutmData?: Dispatch<SetStateAction<PostUTMtype[]>>;
}
export const CreateUTM = ({ setutmData }: CreateBoxProps) => {
  const [memoText, setMemoText] = useState('');
  const [alert, setAlert] = useState(false);
  const queryClient = useQueryClient();
  const [sdata, setSdata] = useState();
  const { mutate, isLoading, data } = useMutation(POST_UTMS, {
    onSuccess: (data) => {
      if (data) {
        queryClient.setQueryData(['fullNshort'], data);
        queryClient.invalidateQueries(['fullNshort']);
      }
    },
  });
  // setSdata(data);
  const source = [
    'band',
    'daum',
    'facebook',
    'google',
    'instagram',
    'kakaotalk',
    'line',
    'naver',
    'newsletter',
    'tiktok',
    'youtube',
  ];
  const mediumSelect = [
    ' affiliates',
    ' banner',
    ' blog',
    ' cpc',
    ' cpm',
    ' display',
    ' email',
    ' notification',
    ' paidsearch',
    ' referral',
    ' social',
    ' socialmedia',
    ' sms',
  ];

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<UTMsType>({
    defaultValues: {
      data: [
        {
          url: '',
          campaignId: '',
          source: '',
          medium: '',
          campaignName: null,
          term: null,
          content: null,
          memo: null,
        },
      ],
    },
    mode: 'onBlur',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'data',
    control,
  });
  // const requeirFn = (e: any) => {
  //   e.target.value = e.target.value.replace(/[^a-z0-9./:_-]?/, '');
  //   e.target.value = e.target.value.replace({ maxLength: 70 }, '');
  // };

  const addList = () => {
    if (fields.length <= 4) {
      append({
        url: '',
        campaignId: '',
        source: '',
        medium: '',
        campaignName: '',
        content: '',
        term: '',
        memo: '',
      });
    }
  };
  const memoHandler = (e: any) => {
    const textareaValue = e.target?.value;
    setMemoText(textareaValue);
  };
  const onSubmit = async (data: UTMsType) => {
    try {
      mutate(data);
    } catch (e) {
      console.log(e);
    }
  };
  /**
   * CopyBox Data
   */
  // useEffect(() => {
  //   if (data !== undefined) {
  //     setutmData(data?.data.data as PostUTMtype[]);
  //   }
  // }, [data]);

  // useEffect(() => {}, [memoText]);

  /**
   * 로그인 하지 않은 유저 로그인 페이지로 보내기
   */
  useEffect(() => {
    // const cookie = getCookie("access_token");
    // if (!cookie) {
    //   redirect("/login");
    // }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.scroll_input}>
          <CreateCategory />
          <div className={styles.create_container}>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <div key={field.id}>
                    <div className={styles.item_box}>
                      <div className={styles.number}>{index + 1}</div>
                      <Tooltip title={'(필수) 연결할 URL을 입력해 주세요.'}>
                        <input
                          placeholder="https://를 붙여서 입력해 주세요."
                          type="url"
                          {...register(`data.${index}.url` as const, {
                            required: true,
                            maxLength: 200,
                          })}
                          className={`${
                            errors?.data?.[index]?.url
                              ? styles.error
                              : styles.input_style
                          }`}
                        />
                      </Tooltip>
                      <datalist id="source">
                        {source.map((i, idx) => (
                          <div key={idx}>
                            <option value={i} />
                          </div>
                        ))}
                      </datalist>
                      <Tooltip
                        title={
                          '(필수) 유저가 어디에서 인입되는지 출처를 입력해 주세요.'
                        }
                      >
                        <input
                          list="source"
                          placeholder="ex) google, naver, facebook…"
                          {...register(`data.${index}.source` as const, {
                            required: true,
                            maxLength: 20,
                          })}
                          className={`${
                            errors?.data?.[index]?.source
                              ? styles.error
                              : styles.input_style
                          }`}
                        />
                      </Tooltip>
                      <datalist id="medium">
                        {mediumSelect.map((i, idx) => (
                          <div key={idx}>
                            <option>{i}</option>
                          </div>
                        ))}
                      </datalist>
                      <Tooltip
                        title={
                          '(필수) 유저가 어떤 방식을 통해 인입되는지 홍보 방법을 입력해 주세요.'
                        }
                      >
                        <input
                          list="medium"
                          placeholder="ex) email, display, cpc…"
                          {...register(`data.${index}.medium` as const, {
                            required: true,
                            maxLength: 20,
                            // pattern: /[a-z]/i,
                          })}
                          className={`${
                            errors?.data?.[index]?.medium
                              ? styles.error
                              : styles.input_style
                          }`}
                        />
                      </Tooltip>
                      <Tooltip
                        title={
                          '(필수) 어떤 이벤트/캠페인을 진행하고 있는지 홍보 명을 입력해 주세요.'
                        }
                      >
                        <input
                          placeholder="ex) close_beta, open_beta, open…"
                          {...register(`data.${index}.campaignName` as const, {
                            maxLength: 20,
                            required: true,
                          })}
                          className={`${
                            errors?.data?.[index]?.campaignName
                              ? styles.error
                              : styles.input_style
                          }`}
                        />
                      </Tooltip>
                      <Tooltip
                        title={
                          '(선택) UTM에 아이디를 붙여 구분하고 싶을 때, 값을 입력해 주세요.'
                        }
                      >
                        <input
                          placeholder="ex) 20230312_UCB, 20230329_abc…"
                          // onInput={requeirFn}
                          {...register(`data.${index}.campaignId` as const, {
                            // pattern: /[a-z]/i,
                            maxLength: 20,
                          })}
                          className={`${
                            errors?.data?.[index]?.campaignId ? 'error' : ''
                          }, ${styles.input_style}`}
                        />
                      </Tooltip>
                      <Tooltip
                        title={
                          '(선택) 검색 광고를 통해 홍보한다면 그때 사용되는 검색어를 입력해 주세요.'
                        }
                      >
                        <input
                          // onInput={requeirFn}
                          placeholder="ex) GA, UTM.."
                          {...register(`data.${index}.term` as const, {
                            maxLength: 20,
                          })}
                          className={`${
                            errors?.data?.[index]?.term ? 'error' : ''
                          }, ${styles.input_style}`}
                        />
                      </Tooltip>
                      <Tooltip
                        title={
                          '(선택) 동일한 광고 캠페인에서 소재가 여러 개일 경우 구분할 수 있는 소재명을 입력해 주세요.'
                        }
                      >
                        <input
                          // onInput={requeirFn}
                          placeholder="ex) 1st, 2nd…"
                          {...register(`data.${index}.content` as const, {
                            maxLength: 20,
                          })}
                          className={`${
                            errors?.data?.[index]?.content ? 'error' : ''
                          }, ${styles.input_style}`}
                        />
                      </Tooltip>
                      <Tooltip
                        title={
                          '(선택) UTM에 대한 메모를 남길 수 있습니다. 자유롭게 활용하세요.'
                        }
                      >
                        <textarea
                          className={`${styles.active}`}
                          placeholder="ex) 캠페인 코멘트, 세션 수 등의 정보"
                          {...register(`data.${index}.memo` as const, {
                            maxLength: 100,
                          })}
                          spellCheck={false}
                        />
                      </Tooltip>
                      <div className={styles.minus_button}>
                        <button
                          className={styles.minus_button_style}
                          type="button"
                          title="button"
                          onClick={() => {
                            if (index >= 1) {
                              remove(index);
                            }
                          }}
                        >
                          <Image
                            className={styles.minus_img}
                            src={minus}
                            alt="리스트 삭제"
                            onError={() => {
                              console.log(
                                '리스트 빼기 이미지를 불러올 수 없습니다.'
                              );
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.create_button_box}>
          <button
            className={styles.add_list_button}
            title="button"
            type="button"
            onClick={addList}
          >
            <Image
              className={styles.plus_button_img}
              src={plus}
              alt="추가하기"
              onError={() => {
                console.log('추가버튼 이미지를 불러오지 못했습니다.');
              }}
            />
          </button>{' '}
          <div className={styles.create_button_box_section}>
            {alert && (
              <Alert
                title={'성공'}
                contents={'UTM 생성을 성공하셨습니다!'}
                onClickEvent={setAlert}
              />
            )}
            {isLoading && (
              <Loading>
                <p>UTM 생성중...</p>
              </Loading>
            )}
            <BlueButton
              size={'sm'}
              color={'full'}
              text={'생성하기'}
              types={'submit'}
              // disabled={isLoading}
            />
          </div>
        </div>
      </form>
      <CreateCopyBox fullNsort={''} />
    </div>
  );
};
