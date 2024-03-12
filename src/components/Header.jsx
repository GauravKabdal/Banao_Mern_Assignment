import logo from "../assets/logo.svg";
import search_logo from "../assets/icons8-search.svg";

const Header = () => {
  return (
    <>
      <div className=" d-none d-lg-block d-flex collapse  navbar-collapse navbar-expand-lg ">
        <nav className=" container d-lg-flex flex  py-4  justify-content-between navbar-collapse ">
          <a href="">
            <img src={logo} alt="" />
          </a>

          <form className="d-flex rounded-pill" style={{ width: "360px" }}>
            <button className="border-0 bg-light" type="submit">
              <img alt="Search" src={search_logo} />
            </button>
            <input
              className="form-control  bg-light border-0  "
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          <a className="text-decoration-none ">
            Create account.<span>Its free</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
