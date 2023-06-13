import React from 'react';
import { usePathname } from 'next/navigation';
import {
  IAdd,
  ICreate,
  IGuide,
  IMenu,
  IMore,
  INoti,
  Imanage,
} from '../icon/Icon';
import Link from 'next/link';
export default function Slim({ slimHandle }: SlimProps) {
  const pathName = usePathname();
  return (
    <aside
      className={
        'h-screen w-[60px] min-w-[60px] text-white ' +
        (pathName == '/' || pathName == '/signin' || pathName === '/signup'
          ? 'hidden'
          : '')
      }
    >
      <div className="bg-blue fixed w-[60px] min-w-[60px] pt-3 ">
        <div
          className="logo_slide flex cursor-pointer justify-center"
          onClick={slimHandle}
        >
          <IMenu fillColor={'white'} />
        </div>

        <div className="w_nav flex h-screen flex-col justify-between pb-4">
          <ul className="top_nav mt-20 flex flex-col items-center gap-4">
            <Link href={'/management'} target="_blank">
              <li
                className={
                  'hover:bg-hblue flex flex-row gap-2 p-2 ' +
                  (pathName == '/management'
                    ? 'bg-hblue rounded-[4px] p-2'
                    : '')
                }
              >
                <Imanage fillColor={'white'} />
              </li>
            </Link>
            <Link href={'/creating'} target="_blank">
              <li
                className={
                  'hover:bg-hblue flex flex-row gap-2 rounded-[4px] p-2 ' +
                  (pathName == '/creating' ? 'bg-hblue rounded-[4px] p-2' : '')
                }
              >
                <ICreate fillColor={'white'} />
              </li>
            </Link>
            <a href={'https://naver.com'} target="_blank">
              <li className=" hover:bg-hblue flex flex-row gap-2 rounded-[4px] p-2 ">
                <IAdd fillColor={'white'} />
              </li>
            </a>
          </ul>
          <div className="bottom_nav mb-20 flex flex-col  items-center gap-3 ">
            <a href={'https://utm.works'} target="_blank">
              <li className=" hover:bg-hblue flex flex-row gap-2 rounded-[4px] p-2 ">
                <INoti bnw={'w'} w={24} h={24} />
              </li>
            </a>
            <a href={'https://naver.com'} target="_blank">
              <li className=" hover:bg-hblue flex flex-row gap-2 rounded-[4px] p-2 ">
                <IGuide fillColor={'white'} />
              </li>
            </a>
            <a href={'https://naver.com'} target="_blank">
              <li className=" hover:bg-hblue flex flex-row gap-2 rounded-[4px] p-2 ">
                <IMore fillColor={'white'} />
              </li>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
