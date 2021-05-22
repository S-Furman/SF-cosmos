import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BackgroundElements from "./BackgroundElements/BackgroundElements";

const Layout = (props) => {
  return (
    <>
      <BackgroundElements />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
