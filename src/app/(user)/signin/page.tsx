import SignIn from '../../../components/signin/SignIn';
import React from 'react';

export default function SignInPage() {
  return (
    <div className="bg-urc-blue-900 h-screen overflow-y-hidden ">
      <div
        className="
    
    absolute bottom-0 left-0 right-0 top-[61px] 
    overflow-y-hidden 
    pt-[140px]
    "
      >
        <SignIn />
      </div>
    </div>
  );
}
