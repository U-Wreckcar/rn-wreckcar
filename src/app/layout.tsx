import './globals.css';
import localFont from 'next/font/local';
import ASide from '../components/common/aside/Aside';
import Header from '../components/common/header/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'UTM 카테고라이징 서비스 "유렉카"',
  description:
    '유렉카는 구글 애널리틱스 마케팅 캠페인 효과 추적을 위해 UTM을 파라미터 별로 생성, 관리, 추출까지! GA를 쓰는 마케터들의 효율적인 업무 관리 툴입니다.',
  icons: {
    icon: '../../public/favicon.ico',
  },
};
const pretendard = localFont({
  src: '../../public/assets/font/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${pretendard.variable}`} lang="ko">
      <meta property="og:image" content="https://utm.works/api/og1200.png" />
      <body id="__next" className="flex h-screen w-screen overflow-x-hidden ">
        <ASide />
        <div className="w-screen">
          <Header />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
