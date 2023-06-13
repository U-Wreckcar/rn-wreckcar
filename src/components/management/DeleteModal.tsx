import Image from "next/image";
import styles from "./main.module.css";
import b_close from "assets/b_close.png";
// import { deleteUTM } from "src/util/async/api";
import { useRouter } from "next/navigation";
// import { delItem, delSelectTable, selectTable } from "src/redux/slice/addslice";
import Modal from "../common/ui/Modal";
// import { BlueButton } from "@/src/common/button/blue_button/BlueButton";
// import { useAppDispatch } from "@/src/util/reduxType/type";
import { CustomStyles, MainTableType } from "./TableData";
import { useEffect, useState } from "react";
import { deleteUTM } from "../../services/async/utm";
import { BlueButton } from "../common/blue_button/BlueButton";

type OutputModalType = {
  isOpen: boolean;
  onRequestClose: () => void;
  style: CustomStyles;
  data: MainTableType[];
  tableData: any;
};
export const DeleteModal: React.FC<OutputModalType> = ({ isOpen, onRequestClose, style, data, tableData }) => {
  const router = useRouter();
  const [selectData, setSelectData] = useState<any[]>([]);
  const [output, setOutput] = useState(false);

  const getDataList = async () => {
    const selectedList: any[] = [];
    tableData.map((table: any) => {
      data.map(async (id: any) => {
        if (table.utm_id / 1 === id / 1) {
          selectedList.push(table);
        }
      });
    });
    const uniqueSelect:any[] = [];
    selectedList.forEach((element) => {
      if (!uniqueSelect.includes(element)) {
        uniqueSelect.push(element);
      }
  });  
    setSelectData([...uniqueSelect]);
  };

  useEffect(() => {
    getDataList().then(() => {
      setOutput(!output);
    });
  }, [output]);

  const onClickDelHandler = () => {
    console.log(selectData);

    setTimeout(() => {
      deleteUTM({ data: selectData });
    }, 500);

    //  deleteUTM({ data }).then(() => {
    //    dispatch(delSelectTable());
    //    dispatch(selectTable({}));
    //  });
    // onRequestClose();
    router.replace("/main");
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <div className={styles.del_dialogBox} {...(isOpen && true ? { open: true } : {})} id="favDialog">
        <div className={styles.header}>
          <div className={styles.title_box}>
            <span className={styles.title}>UTM 삭제하기</span>
          </div>
          <div className={styles.cancleBtn_box}>
            {/* <button className={styles.cancleBtn} onClick={onRequestClose}>
              <Image src={b_close} alt='close_img' width={24} height={24} />
            </button> */}
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.col_box}>
            <p>{data.length}개의 UTM이 선택되었습니다.</p>
            <p>삭제된 UTM은 복구할 수 없습니다.</p>
            <p>정말 삭제하시겠습니까?</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <button onClick={onRequestClose} className={styles.modal_del_button} value="default">
            취소하기
          </button>
          {/* <button
            onClick={onClickDelHandler}
            className={styles.modal_button}
            value="default"
          >
            삭제하기
          </button> */}
          <BlueButton text={"삭제하기"} size={"sm"} clickEvent={onClickDelHandler} color={"full"} types={"button"} />
        </div>
      </div>
    </Modal>
  );
};
