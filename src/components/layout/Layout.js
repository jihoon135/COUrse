import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main">컴포넌트가 들어갈 공간</div>
      <Footer />
    </div>
  );
};

export default Layout;
