'use client';
import React from 'react';
import { SBtn } from '../common/ui/SBtn';

export default function Winfo() {
  const infoTitle = [
    '워크 스페이스 이름',
    '워크 스페이스 생성자',
    '워크 스페이스 생성 날짜',
    '워크 스페이스 멤버',
    '캠페인 기간',
    '메모',
  ];
  const worksMock = {
    id: 1,
    name: '2023년 3월 유렉카 설문조사 이벤트',
    creator: '유렐카',
    createAt: '2023.04.29',
    member: ['철수', '짱구', '짱아'],
    campaign_create: 'campaign_id',
    memo: 'term_text',
  };
  const editHandle = () => {};
  return (
    <div className="px-5">
      <div
        className="
      front_box 
      flex 
      max-w-2xl
      items-end
      justify-between
      gap-10
      py-4 "
      >
        <div
          className="
        title_box shrink-0"
        >
          <h1>워크 스페이스 정보 </h1>
          <h2>해당 워크 스페이스의 정보를 확인할 수 있습니다.</h2>
        </div>
        <div
          className="
          info_btn 
        flex gap-2
        "
        >
          <SBtn onClick={editHandle} size={'md'} label={'정보 추가'} />
          <SBtn onClick={editHandle} size={'md'} label={'멤버 추가'} />
        </div>
      </div>
      <div
        className="
        border-soild max-h-2xl
      flex 
      max-w-2xl
      rounded-[4px] 
      border-[1px] 
      border-[#e1e1e1]
      "
      >
        <ul
          className="
          h-[280px]
          max-w-2xl
          border-r-[1px] 
          border-solid 
          border-[#e1e1e1]"
        >
          {infoTitle.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
        <ul>
          <li>{worksMock.name}</li>
          <li> {worksMock.creator}</li>
          <li> {worksMock.createAt}</li>
          <li className="flex">
            {worksMock.member.map((m: any, idx: any) => (
              <li key={idx} className="flex flex-row">
                {m}
              </li>
            ))}
          </li>
          <li> {worksMock.campaign_create}</li>
          <li> {worksMock.memo}</li>
        </ul>
      </div>
    </div>
  );
}
