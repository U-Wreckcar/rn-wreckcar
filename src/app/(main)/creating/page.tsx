import styles from './createutm.module.css';
import CreatePage from '../../../components/create/CreatePage';
export default function CreateUTMPage() {
  return (
    <>
      <div className={styles.create_container}>
        <h1>새 UTM 생성하기</h1>
        <div className={styles.help_box}>
          <p className={styles.sub_title}>
            UTM은 한번에 5개까지 생성할 수 있습니다.
          </p>
          <CreatePage />
          <p className={styles.help_text}>*는 필수 입력 값입니다.</p>
        </div>
      </div>
    </>
  );
}
