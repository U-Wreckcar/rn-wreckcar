import React from 'react';
import black_noti from '../../../../public/assets/png_icon/black_noti.png';
import white_noti from '../../../../public/assets/png_icon/white_noti.png';
import Image from 'next/image';
export const INoti = ({ bnw, w, h }: NotiType) => {
  return (
    <>
      {bnw === 'w' && (
        <Image src={white_noti} alt={''} width={`${w}`} height={`${h}`} />
      )}
      {bnw === 'b' && (
        <Image src={black_noti} alt={''} width={`${w}`} height={`${h}`} />
      )}
    </>
  );
};
export const ILogo = () => {
  return (
    <>
      <svg
        width="82"
        height="30"
        viewBox="0 0 82 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 23.2884H5.73414L5.3591 27.7725H10.8524L11.2294 23.2884H13.4047L12.8441 29.9695H18.3374L18.9 23.2884H24.8196L25.3092 17.7129H0.481628L0 23.2884Z"
          fill="white"
        />
        <path
          d="M41.1935 17.7616H46.296L47.4606 4.4375H42.3601L42.0561 7.82009H39.9875L39.5059 13.3976H41.5784L41.1935 17.7616Z"
          fill="white"
        />
        <path
          d="M48.373 17.7612H53.6256L55.1869 0.0332031H49.9403L48.373 17.7612Z"
          fill="white"
        />
        <path
          d="M76.1579 9.99154L76.9988 0H71.7206L69.3125 27.7736H74.565L75.6724 15.5651H80.6367L81.1124 9.99154H76.1579Z"
          fill="white"
        />
        <path
          d="M38.4727 25.5756H47.7262L47.3591 29.9996H52.6116L53.4545 20H38.9523L38.4727 25.5756Z"
          fill="white"
        />
        <path
          d="M56.4141 10.0111H63.4075L63.2082 12.2081H58.2833L57.8076 17.7836H62.7226L62.0377 25.5822H67.3001L69.1456 4.43555H56.8898L56.4141 10.0111Z"
          fill="white"
        />
        <path
          d="M28.2719 7.72595H32.5987L32.4131 9.89889H28.0765L26.9297 23.281H36.503L36.9847 17.7055H31.7361L31.9315 15.4745H37.1801L38.3269 2.15039H28.7496L28.2719 7.72595Z"
          fill="white"
        />
        <path
          d="M13.5944 15.9619C17.3132 15.9619 20.3391 12.8918 20.3391 9.11867C20.3391 5.34555 17.3132 2.27539 13.5944 2.27539C9.87558 2.27539 6.84961 5.34555 6.84961 9.11867C6.84961 12.8918 9.87558 15.9619 13.5944 15.9619ZM13.5944 7.89701C14.2596 7.89701 14.7985 8.44575 14.7985 9.11867C14.7985 9.79158 14.2576 10.3403 13.5944 10.3403C12.9312 10.3403 12.3903 9.79158 12.3903 9.11867C12.3903 8.44575 12.9312 7.89701 13.5944 7.89701Z"
          fill="white"
        />
      </svg>
    </>
  );
};
export const IAdd = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V11"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 17H21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 13V21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const IPlus = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 3V21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const ICalendar = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2.75"
          y="4.75"
          width="18.5"
          height="16.5"
          rx="1.25"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
        <path
          d="M7 3L7 6"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 3L17 6"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 9H21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.5 14L10.8182 17.3044C11.222 17.8799 12.0778 17.8702 12.4684 17.2857L16 12"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const ICirClose = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99994 15L15.0001 8.99988"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.99994 9L15.0001 15.0001"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9.25"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
export const IClose = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.99983 5L19.0002 19.0003"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19.0002 5L4.99983 19.0003"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const IConfirm = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 11L10.395 14.3744C10.7889 14.9293 11.61 14.9373 12.0146 14.3901L16 9"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9.25"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
export const ICreate = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 21H5C3.89543 21 3 20.1046 3 19V16"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 3H5C3.89543 3 3 3.89543 3 5V8"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 21H19C20.1046 21 21 20.1046 21 19V16"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 3H19C20.1046 3 21 3.89543 21 5V8"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 12H16"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 8V16"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const IDel = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12H16"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9.25"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
export const IFillter = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.2203 3H4.77973C3.00484 3 2.10941 5.13998 3.35537 6.404L9.28149 12.416C9.65036 12.7902 9.85714 13.2946 9.85714 13.82V19C9.85714 20.1046 10.7526 21 11.8571 21H12.1429C13.2474 21 14.1429 20.1046 14.1429 19V13.82C14.1429 13.2946 14.3496 12.7902 14.7185 12.416L20.6446 6.404C21.8906 5.13998 20.9952 3 19.2203 3Z"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const IGuide = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.5V12"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8748 9.5C12.4271 9.5 12.8748 9.05228 12.8748 8.5C12.8748 7.94772 12.4271 7.5 11.8748 7.5C11.3225 7.5 10.8748 7.94772 10.8748 8.5C10.8748 9.05228 11.3225 9.5 11.8748 9.5Z"
          fill={`${fillColor}`}
        />
      </svg>
    </>
  );
};
export const ILink = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8058 10.5L15.4648 9.79877C14.9817 8.80544 13.7848 8.3918 12.7915 8.87488L3.79859 13.2484C2.80525 13.7314 2.39161 14.9283 2.87469 15.9216L4.95209 20.1933C5.43518 21.1866 6.63204 21.6002 7.62537 21.1172L16.6183 16.7437C17.6116 16.2606 18.0253 15.0637 17.5422 14.0704L17.1114 13.1845"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.61494 13.5L8.95209 14.1933C9.43518 15.1866 10.632 15.6002 11.6254 15.1172L20.6183 10.7437C21.6116 10.2606 22.0253 9.06374 21.5422 8.07041L19.4648 3.79877C18.9817 2.80544 17.7848 2.3918 16.7915 2.87488L7.79859 7.24835C6.80525 7.73143 6.39161 8.9283 6.87469 9.92163L7.30747 10.8115"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const ILogout = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H12.5"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.1564 16.1565L21.2347 12.1012L17.1564 7.99977"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.2133 12L9 12"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export const Imanage = ({ fillColor }: PropsType) => {
  return (
    <>
      {' '}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="2"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="2"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="2"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="2"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
export const IMenu = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 4H21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 12H21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 20H21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
export const IMore = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
          fill={`${fillColor}`}
        />
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          fill={`${fillColor}`}
        />
        <path
          d="M8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13Z"
          fill={`${fillColor}`}
        />
      </svg>
    </>
  );
};

export const ISearch = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0001 17L21.5 21.4999"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="11"
          cy="11"
          r="8.25"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
export const ISlim = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        // fill={`${fillColor}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 21L3 12L11 3"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21L13 12L21 3"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export const IUser = ({ fillColor }: PropsType) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21V17C21 15.3431 19.6569 14 18 14H6C4.34315 14 3 15.3431 3 17V21"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke={`${fillColor}`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export const IProfile = () => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#0A0D54" />
        <path
          d="M23.5 22.4993V19.666C23.5 18.0092 22.1569 16.666 20.5 16.666H11.5C9.84315 16.666 8.5 18.0092 8.5 19.666V22.4993"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 14.1667C17.841 14.1667 19.3334 12.6743 19.3334 10.8333C19.3334 8.99238 17.841 7.5 16 7.5C14.1591 7.5 12.6667 8.99238 12.6667 10.8333C12.6667 12.6743 14.1591 14.1667 16 14.1667Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
