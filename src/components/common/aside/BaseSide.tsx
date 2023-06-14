'use client';
import React, { useState } from 'react';
import ATag from '../link/ATag';
import {
  IAdd,
  ICreate,
  IGuide,
  ILogo,
  IMenu,
  IMore,
  INoti,
  ISlim,
  Imanage,
} from '../icon/Icon';
import { usePathname } from 'next/navigation';
// import { SlimProps } from './AsideType';
export default function Base({ slimHandle }: SlimProps) {
  const pathName = usePathname();

  const listHover =
    ' hover:bg-urc-blue-600  flex flex-row  gap-2 rounded-[4px] p-2';
  const listActive = ' bg-urc-blue-600 rounded-[4px] p-2';
  return (
    <aside
      className={
        'h-screen w-[270px] min-w-[270px] text-white' +
        (pathName == '/' ||
        pathName == '/signin' ||
        pathName === '/signup' ||
        pathName === '/webonly' ||
        pathName === '/forgetpassword'
          ? ' hidden'
          : '')
      }
    >
      <div
        className="
      bg-urc-blue-primary-500 fixed w-[270px] min-w-[270px] 
      pb-5 pt-3 "
      >
        <div className="logo_slide mt-1 flex justify-between px-3">
          <ATag href={'/'} isBlank={false}>
            <div className="logo ml-3 h-[70px]">
              <ILogo />
            </div>
          </ATag>
          <div onClick={slimHandle} className="mr-2 cursor-pointer">
            <ISlim fillColor={'white'} />
          </div>
        </div>

        <div
          className="
        w_nav flex h-screen flex-col justify-between px-3 pb-4"
        >
          <ul
            className="
          top_nav mt-10 flex flex-col gap-2 "
          >
            <p
              className="
            mb-4 ml-3 text-xl font-bold"
            >
              내 UTM
            </p>
            <ATag href={'/management'} isBlank={false}>
              <li
                className={
                  `${listHover}` +
                  (pathName == '/management' ? `${listActive}` : '')
                }
              >
                <Imanage fillColor={'white'} />
                UTM 관리하기
              </li>
            </ATag>
            <ATag href={'/creating'} isBlank={false}>
              <li
                className={
                  `${listHover}` +
                  (pathName == '/creating' ? `${listActive}` : '')
                }
              >
                <ICreate fillColor={'white'} />새 UTM 생성하기
              </li>
            </ATag>

            <ATag href={'https://naver.com'} isBlank={false}>
              <li className={`${listHover}`}>
                <IAdd fillColor={'white'} />
                기존 UTM 추가하기
              </li>
            </ATag>
            <p className="mb-4 ml-3 mt-10 text-xl font-bold"> 워크 스페이스</p>
            <ATag href={'/workspace/main'} isBlank={false}>
              <li
                className={
                  `${listHover}` +
                  (pathName == `/workspace/main` ? `${listActive}` : '')
                }
              >
                <IMenu fillColor={'white'} />
                워크 스페이스 관리하기
              </li>
            </ATag>

            <li className={`${listHover}`}>
              <ICreate fillColor={'white'} />새 워크 스페이스 생성하기
            </li>
          </ul>
          <ul className="mb-20 flex flex-col gap-3 pb-12  ">
            <p className=" ml-3 text-xl font-extrabold">유렉카</p>
            <ATag href={'https://utm.works'} isBlank={true}>
              <li className={`${listHover}`}>
                <INoti bnw={'w'} w={24} h={24} />
                공지사항
              </li>
            </ATag>

            <ATag href={'https://naver.com'} isBlank={true}>
              <li className={`${listHover}`}>
                <IGuide fillColor={'white'} />
                가이드
              </li>
            </ATag>

            <ATag href={'https://naver.com'} isBlank={true}>
              <li className={`${listHover}`}>
                <IMore fillColor={'white'} />
                문의하기
              </li>
            </ATag>
          </ul>
        </div>
      </div>
    </aside>
  );
}
