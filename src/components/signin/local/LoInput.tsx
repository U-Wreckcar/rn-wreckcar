'use client';
import React, { useEffect, useState } from 'react';
import Option from './LoOption';
import { SBtn } from '../../../components/common/ui/SBtn';
import { SIGN_IN } from '../../../services/async/user';

export default function Input() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPWVaild, setPWVaild] = useState(true);
  const [isEmailValid, setEmailVaild] = useState(true);
  const [check, setCheck] = useState<string>();

  const loginHandle = async () => {
    const loginData = { data: { email, password } };
    // 전역으로 관리를 해서 재사용할지 아니면 다른 api로 요청할지 고민중
    // const res = await SIGN_IN(loginData);
    localStorage.setItem('uwreckcarLocalEmail', email);
  };

  const vaildEmail = (email: string): boolean => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return pattern.test(email);
  };

  const vaildPassword = (passwordValue: string): boolean => {
    const pattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pattern.test(passwordValue);
  };

  const emailHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inEmail = e.target.value;
    setEmailVaild(vaildEmail(inEmail));
    setEmail(inEmail);
  };
  const passwordHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inPassword = e.target.value;
    setPassword(inPassword);
    setPWVaild(vaildPassword(inPassword));
  };
  /**
   * Login Button
   */

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getIsChecked = localStorage.getItem('uwreckcarLocalIdCheck') || '';
      const getEmail = localStorage.getItem('uwreckcarLocalEmail') || '';

      if (getEmail && getIsChecked) {
        setEmail(getEmail);
      }
      if (getIsChecked) {
        setCheck(getIsChecked);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <input
        type="email"
        className="
        h-[40px] w-[500px] 
        rounded-[4px] border-[1px] border-solid border-[#e1e1e1] 
        px-2"
        defaultValue={check === 'true' ? `${email}` : undefined}
        placeholder="이메일을 입력해주세요"
        onChange={emailHandle}
      />
      <input
        type="password"
        className="
        h-[40px] 
        rounded-[4px] border-[1px] border-solid border-[#e1e1e1]
        px-2 "
        placeholder="비밀번호를 입력해주세요"
        onChange={passwordHandle}
      />
      <div className="h-[16px]">
        {isEmailValid ? (
          ''
        ) : (
          <div className="text-lRed pl-0.5 text-sm">
            유효한 이메일을 입력하세요
          </div>
        )}
        {!isPWVaild && (
          <div className="text-lRed pl-0.5 text-sm">
            비밀번호 형식이 맞지 않습니다.
          </div>
        )}
      </div>
      <Option />
      <SBtn size={'lg'} color={'blue'} onClick={loginHandle}>
        로그인
      </SBtn>
    </div>
  );
}
