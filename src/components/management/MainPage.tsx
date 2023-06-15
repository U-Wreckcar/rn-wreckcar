"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { getCookie, removeCookie } from "src/util/async/Cookie";
import { Alert, AlertTitle } from "@mui/material";
import styles from "./main.module.css";
import BtnAlert from "../../components/common/blue_button/Alert";

import filterImg from "public/assets/img/filter.png";
import plusImg from "public/assets/img/plus.png";
import Image from "next/image";
import MainTable from "./MainTable";
import dynamic from "next/dynamic";
import { getUTMs } from "../../services/async/utm";
import { MainTableType } from "./TableData";

// import { EditModal } from "./MainMemoModal";
// import { OutputModal } from "./OutputModal";
// import { DeleteModal } from "./DeleteModal";
// import { AddUtmModal } from "./AddUtmModal";
// const EditModal= dynamic(() => import("./MainMemoModal").then((mod) => mod.EditModal) as Promise<React.ComponentType<any>>);
// const OutputModal = dynamic(() => import("./OutputModal").then((mod) => mod.OutputModal) as Promise<React.ComponentType<any>>);
// const DeleteModal = dynamic(() => import("./DeleteModal").then((mod) => mod.DeleteModal) as Promise<React.ComponentType<any>>);
// const AddUtmModal = dynamic(() => import("./AddUtmModal").then((mod) => mod.AddUtmModal) as Promise<React.ComponentType<any>>);

export default function MainPageComponent() {
  const [output, setOutput] = useState(false);
  const [plus, setPlus] = useState(false);
  const [alert, setAlert] = useState(false);
  const [filter, setFilter] = useState(false);
  const [warningAlert, setWarningAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [del, setDel] = useState(false);
  const [select, setSelect] = useState<any>([]);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [target, setTarget] = useState(0);

  const [tableData, setTableData] = useState<MainTableType[]>([]);

  /** Get 요청 */
  const getData = async () => {
    try {
      const res: any = await getUTMs();
      setTableData(res.data.data);
    } catch (err) {
      router.replace("/");
    }
  };

  //체크박스 선택
  const onChecked = (e: any) => {
    if (e.target.checked) {
      setSelect([...select, e.target.id]);
    } else {
      setSelect(select.filter((el: any) => el !== e.target.id));
    }
  };

  //삭제하기
  const onClickDelBtn = () => {
    if (select.length === 0) {
      setWarningAlert(true);
    } else {
      setDel(true);
    }
  };

  //추출하기
  const onClickPopBtn = () => {
    if (select.length === 0) {
      setWarningAlert(true);
    } else {
      setOutput(true);
    }
  };

  //메모 수정하기
  const onClickMemo = (e: any) => {
    setShow(true);
    setValue(e.target.dataset.id);
    setTarget(e.target.id);
  };

  //알럿창
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);

  //3초후 꺼지는 알림창
  useEffect(() => {
    if (warningAlert) {
      setTimeout(() => {
        setWarningAlert(false);
      }, 3000);
    }
  }, [warningAlert]);

  //데이터 부르기
  useEffect(() => {
    getData();
  }, [tableData.length]);

  //title 문구 변경하기
  useEffect(() => {
    if (select.length === 0) {
      setTitle(`${tableData?.length}개의 UTM이 쌓여 있어요!`);
    } else if (select.length !== 0) {
      setTitle(`${select?.length}개의 UTM이 선택됐어요!`);
    }
  }, [select.length]);

  //체크박스 전체 선택
  const onChangeAllCheck = (checked: any) => {
    if (checked) {
      const idList: any[] = [];
      tableData.map((table) => idList.push(table._id));
      setSelect(idList);
    } else {
      setSelect([]);
    }
  };

  return (
    <div id="root">
      {warningAlert && (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          선택된 데이터가 없습니다.
          <strong>데이터를 체크해주세요!</strong>
        </Alert>
      )}
      {alert && <BtnAlert title={"성공"} contents={"UTM이 복사되었습니다!"} onClickEvent={setAlert} />}
      <div className={styles.container}>
        <div className={styles.btn_box}>
          <div className={styles.title_box_d}>
            <h1>내 UTM</h1>
            <h4>{title}</h4>
          </div>
          <div className={styles.buttons_box}>
            <button id="export_btn" className={styles.button} onClick={onClickPopBtn}>
              추출하기
            </button>
            {/* <OutputModal
              isOpen={output}
              onRequestClose={() => setOutput(false)}
              style={customStyles}
              dataList={select}
              tableData={tableData}
            /> */}
            <button className={styles.button} onClick={onClickDelBtn}>
              삭제하기
            </button>
            {/* <DeleteModal
              isOpen={del}
              onRequestClose={() => setDel(false)}
              style={customStyles}
              data={select}
              tableData={tableData}
            /> */}
            <button
              className={styles.plus_button}
              title="button"
              onClick={() => {
                setFilter(!filter);
              }}
            >
              <Image src={filterImg} alt="filter" width={24} height={24} />
            </button>
            <button title="button" className={styles.plus_button} onClick={() => setPlus(true)}>
              <Image src={plusImg} alt="plus" width={24} height={24} />
            </button>
            {/* <AddUtmModal isOpen={plus} onRequestClose={() => setPlus(false)} style={customStyles} /> */}
          </div>
          {/* <EditModal
            isOpen={show}
            onRequestClose={() => setShow(false)}
            style={customStyles}
            value={value}
            index={target}
          /> */}
        </div>
        <MainTable
          onChangeAllCheck={onChangeAllCheck}
          select={select}
          onClickMemo={onClickMemo}
          onCheck={onChecked}
          tableData={tableData}
          filter={filter}
        />
      </div>
    </div>
  );
}
