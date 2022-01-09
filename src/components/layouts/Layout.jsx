// - 子コンポーネント =====================================================================================================
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";


export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <Header/>
      { children }
      <Footer/>
    </>
  )
}
