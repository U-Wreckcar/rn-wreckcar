import { Tooltip } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TableTBody } from "./TableTBody";
import styles from "./table.module.css";
import Alert from "../common/blue_button/Alert";


export const Tbody = ({ onCheck, tableData, onClickMemo, select }: any) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    console.log(tableData.length);
  }, [tableData]);

  const onClickCopyBtn = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setAlert(true);
      });
    }
  };

  return (
    <tbody>
      {alert && <Alert title={"성공"} contents={"UTM이 복사되었습니다!"} onClickEvent={setAlert} />}

      {tableData.length === 0 && (
        <td style={{ overflow: "inherit" }}>
          <div className={styles.no_data}>
            <div className={styles.no_data_item}>
              <p>등록된 UTM이 없어요.</p>
              <Link href={"/createutm"}>
                <button>UTM 생성하기</button>
              </Link>
            </div>
          </div>
        </td>
      )}
      {tableData?.map((table: any, i: number) => (
        <tr key={i}>
          <td>
            <input
              id={table._id}
              onChange={(e) => onCheck(e)}
              type="checkbox"
              checked={select.includes(table._id) ? true : false}
            />
          </td>
          <TableTBody title={table.createdAt} />
          <TableTBody title={table.url} />
          <TableTBody title={table.campaignId} />
          <TableTBody title={table.source} />
          <TableTBody title={table.medium} />
          <TableTBody title={table.campaignName} />
          <TableTBody title={table.term} />
          <TableTBody title={table.content} />
          <Tooltip title={"클릭시 메모 수정가능합니다."}>
            <td>
              <input placeholder={table.memo} id={table.utm_id} onClick={onClickMemo} data-id={table.memo}></input>
            </td>
          </Tooltip>
          <Tooltip title={"클릭시 복사 가능합니다."}>
            <td onClick={() => onClickCopyBtn(table.fullUrl)}>
              <>{table.fullUrl}</>
            </td>
          </Tooltip>
          <Tooltip title={"클릭시 복사 가능합니다."}>
            <td onClick={() => onClickCopyBtn(table.shortenUrl)}>
              <>{table.shortenUrl}</>
            </td>
          </Tooltip>
          <Tooltip title="shorten URL 클릭 수입니다.">
            <td>
              <>{table.clickCount}</>
            </td>
          </Tooltip>
        </tr>
      ))}
    </tbody>
  );
};
