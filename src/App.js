// - アセット ===========================================================================================================
import styles from "./App.module.scss";

// - 子コンポーネント =====================================================================================================
import { Heading } from "./components/atoms/Heading";
import { BicycleCard } from "./components/organisms/card/BicycleCard";

function App() {

  const BicycleCardItems = [
    {
      id: "1",
      imgURI: "https://dummyimage.com/1000x1000/03488d/fff",
      title: "タイトル1",
      description: "タイトル1の説明が入ります"
    },
    {
      id: "2",
      imgURI: "https://dummyimage.com/800x800/03488d/fff",
      title: "タイトル2",
      description: "タイトル2の説明が入ります"
    },
    {
      id: "3",
      imgURI: "https://dummyimage.com/600x600/03488d/fff",
      title: "タイトル3",
      description: "タイトル3の説明が入ります"
    }
  ]

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

        <div className={styles.bicycleCardsFlow}>
          {BicycleCardItems.map((item) => (
            <BicycleCard
              key={item.id}
              imgURI={item.imgURI}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </section>
    </>

  );
}

export default App;
