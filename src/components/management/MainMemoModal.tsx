import Image from "next/image";
import styles from "./main.module.css";
import { useRef } from "react";

import Modal from "../common/ui/Modal";

import { CustomStyles} from "./TableData";
import { patchUTM } from "../../services/async/utm";
import { BlueButton } from "../common/blue_button/BlueButton";

type EditModalType = {
  isOpen: boolean;
  onRequestClose: () => void;
  style: CustomStyles;
  value: string;
  index: number;
};
export const EditModal: React.FC<EditModalType> = ({ isOpen, onRequestClose, style, value, index }) => {
  const textarea_ref = useRef<HTMLTextAreaElement>(null);

  //수정하기
  const onClickEditButton = () => {
    patchUTM({ _id: index, memo: textarea_ref?.current?.value });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <div className={styles.del_dialogBox}>
        <div className={styles.header}>
          <div className={styles.title_box}>
            <span className={styles.title}>UTM 메모 수정하기</span>
          </div>
          <div className={styles.cancleBtn_box}>
            {/* <button className={styles.cancleBtn} onClick={onRequestClose}>
              <Image src={b_close} alt="close_img" width={24} height={24} />
            </button> */}
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.col_box}>
            <textarea ref={textarea_ref} defaultValue={value} className={styles.main_area} maxLength={100} />
          </div>
        </div>
        <div className={styles.bottom}>
          <button onClick={onRequestClose} className={styles.modal_del_button} value="default">
            취소하기
          </button>
          <BlueButton size={"sm"} color={"full"} clickEvent={onClickEditButton} text={"수정하기"} types={"button"} />
        </div>
      </div>
    </Modal>
  );
};
