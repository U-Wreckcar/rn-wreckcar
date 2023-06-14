import React from "react";
import styles from "./table.module.css";

export const TableThead = ({ select, tableData, onChangeAllCheck }: any) => {
  return (
    <tr>
      <th className={styles.main_select}>
        <input
          type="checkbox"
          onChange={(e) => onChangeAllCheck(e.target.checked)}
          checked={tableData.length === select.length}
        />
      </th>
      <th className={styles.main_date}>생성날짜</th>
      <th className={styles.main_url}>URL</th>
      <th className={styles.main_id}>캠페인 ID</th>
      <th className={styles.main_src}>소스</th>
      <th className={styles.main_medium}>미디움</th>
      <th className={styles.main_name}>캠페인 이름</th>
      <th className={styles.main_term}>캠페인 텀</th>
      <th className={styles.main_content}>캠페인 콘텐츠</th>
      <th className={styles.main_memo}>메모</th>
      <th className={styles.main_full}>UTM</th>
      <th className={styles.main_short}>Shorten URL</th>
      <th className={styles.main_click}>클릭 수 </th>
    </tr>
  );
};

