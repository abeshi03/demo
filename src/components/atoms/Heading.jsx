// - アセット ===========================================================================================================
import styles from "./Heading.module.scss";


export const Heading = (props) => {

  const { heading, style } = props;

  return (
    <h2 className={styles.heading} style={style}>{ heading }</h2>
  )
}
