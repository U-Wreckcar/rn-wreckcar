import React, { useRef, useState } from "react";
import styles from "./table.module.css";
import blackFilterImg from "public/assets/img/b_filter.png";
import Image from "next/image";

export const MainFilter = ({ query, onChange, getDate }: any) => {
  const [startDate, setStartDate] = useState<string | number>("");
  const [isOpen, setIsOpen] = useState(false);
  const item_ref = useRef<HTMLInputElement>(null);

  const onChanged = (e: any) => {
    item_ref && item_ref?.current?.setAttribute("value", query);
    onChange(e);
  };

  const filterList = [
    { size: 110, id: "url" },
    { size: 110, id: "campaignId" },
    { size: 70, id: "source" },
    { size: 70, id: "medium" },
    { size: 120, id: "campaignName" },
    { size: 70, id: "term" },
    { size: 70, id: "content" },
    { size: 110, id: "memo" },
    { size: 110, id: "fullUrl" },
    { size: 60, id: "shortenUrl" },
    { size: 60, id: "clickCount" },
  ];

  return (
    <tr>
      <td>
        <Image src={blackFilterImg} alt="filter" width={25} height={25} />
      </td>
      <td style={{ textOverflow: "clip" }}>
        <input onFocus={() => setIsOpen(true)} placeholder="기간 선택" style={{ width: "80px" }} />
      </td>
      {isOpen && (
        <div className={styles.dialog}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="date"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            <input type="date" onChange={(e) => getDate(startDate, e.target.value)} />
            <button className={styles.dialog_button} onClick={() => setIsOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {filterList.map((item, i) => (
        <td style={{ textOverflow: "clip" }} key={i}>
          <input ref={item_ref} id={item.id} onChange={onChanged} style={{ width: `${item.size}px` }} />
        </td>
      ))}
    </tr>
  );
};
