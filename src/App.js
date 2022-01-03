// - アセット ===========================================================================================================
import styles from "./App.module.scss";

// - 子コンポーネント =====================================================================================================
import { Heading } from "./components/atoms/Heading";

function App() {
  return (
    <>
      <main
        className={styles.mainImage}
      ></main>

      <section className={styles.aboutSection}>
        <Heading
          heading="About"
          style={{display: "flex", justifyContent: "center", alignItems: "center"}}
        />
        {/*コンポーネント分割しない為今回は省略*/}
        <div>テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります</div>
      </section>

      <section className={styles.bicycleSection}>
        <Heading
          heading="Bicycle"
          style={{display: "flex", justifyContent: "center", alignItems: "center"}}
        />
      </section>
    </>

  );
}

export default App;
