"use client";

import React, { useEffect, useState } from "react";

import styles from "./table.module.css";

import { TableThead } from "./TableThead";
import { MainFilter } from "./MainFilter";
import { filterItems } from "./filterItems";
import { Tbody } from "./Tbody";

const MainTable = ({ onCheck, tableData, filter, onClickMemo, select, onChangeAllCheck }: any) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(tableData);

  useEffect(() => {
    tableData && setResult(tableData);
  }, [tableData]);

  /**
   *
   * @param id event target id
   */
  const filterData = async (id: string) => {
    const results = await filterItems(tableData, query, id);
    setResult(results);
  };

  /**
   *
   * @param e onchange event
   */
  function handleChange(e: any) {
    setQuery(e.target.value);
    filterData(e.target.id);
  }

  //날짜 두 개 받아서 사이 값 구하기
  function getDatesStartToLast(startDate: string | number, lastDate: string | number) {
    const regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if (typeof startDate === "string" && typeof lastDate === "string") {
      if (!(regex.test(startDate) && regex.test(lastDate))) return "Not Date Format";

      let result: (string | number | Date)[] = [];

      const curDate = new Date(startDate);

      while (curDate <= new Date(lastDate)) {
        result.push(curDate.toISOString().split("T")[0].toString());
        curDate.setDate(curDate.getDate() + 1);
      }
      let res = tableData.filter((date: any) => result.includes(date.created_at_filter));
      setResult(res);
    }
  }

  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <TableThead onChangeAllCheck={onChangeAllCheck} tableData={tableData} select={select} />
          {filter && <MainFilter query={query} onChange={handleChange} getDate={getDatesStartToLast} />}
        </thead>
        <Tbody onCheck={onCheck} tableData={result} onClickMemo={onClickMemo} select={select} />
      </table>
    </div>
  );
};

export default MainTable;
