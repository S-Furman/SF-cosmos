import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BackgroundElements from "./BackgroundElements/BackgroundElements";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
      <BackgroundElements />
    </>
  );
};

export default Layout;
