// - アセット ===========================================================================================================
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={styles.headerInner}>
        <div className={styles.logo}>Profile</div>
        <div className={styles.left} role="navigation">
          <a className={styles.link} hreh="#" role="link">About</a>
          <a className={styles.link} hreh="#" role="link">Bicycle</a>
        </div>
      </div>
    </header>
  )
}
