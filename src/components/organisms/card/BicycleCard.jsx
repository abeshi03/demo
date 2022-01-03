// - アセット ============================================================================================================
import styles from "./BicycleCard.module.scss";

export const BicycleCard = (props) => {

  const { imgURI, title, description } = props;

  return (
    <div className={styles.bicycleCard}>
      <div
        className={styles.img}
        style={{backgroundImage: `url(${imgURI})`}}
        role="img"
      ></div>
      <h3 className={styles.title}>{ title }</h3>
      <p className={styles.description}>{ description }</p>
    </div>
  )
}
