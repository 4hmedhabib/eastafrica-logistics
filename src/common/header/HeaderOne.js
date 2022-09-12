import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../elements/logo/Logo";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import Darkmode from "./Darkmode";
import useStickyHeader from "./useStickyHeader";
import { Link } from "react-router-dom";

const HeaderOne = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky && check ? "sticky" : ""}`;

  return (
    <>
      <header ref={ref} className={`rn-header header-default ${headerClasses}`}>
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-4">
              <Logo
                image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                image2={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
              />
            </div>
            <div className="col-lg-9 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>
                <div className="header-btn">
                  <Link className={`btn-default ${btnStyle}`} to="/contact">
                    Get Start
                  </Link>
                </div>
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span
                      className="hamberger-button"
                      onClick={onCanvasHandler}
                    >
                      <FiMenu />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderOne;
