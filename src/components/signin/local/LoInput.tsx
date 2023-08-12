'use client';
import React, { useEffect, useState } from 'react';
import Option from './LoOption';
import { SBtn } from '../../../components/common/ui/SBtn';
import { SIGN_IN } from '../../../services/async/user';
import { useRouter } from 'next/navigation';

export default function Input() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPWVaild, setPWVaild] = useState(true);
  const [isEmailValid, setEmailVaild] = useState(true);
  const [check, setCheck] = useState<string>();
  const router = useRouter();
  /**
   * Login Button
   */
  const loginHandle = async () => {
    const loginData = { data: { email, password } };
    const response = await SIGN_IN(loginData);
    const isSuccess = response.data.result.success;
    if (isSuccess === true) {
      router.replace('/management');
      localStorage.setItem('uwreckcarLocalEmail', email);
    } else {
      alert(
        '서버와 연결이 어렵습니다. 인터넷 또는 와이파이를 확인하시고 이외 문제는 오픈카카오톡으로 문의를 주세요.'
      );
    }
    return response;
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
      <SBtn size={'lg'} label={'로그인'} onClick={loginHandle} />
    </div>
  );
}
