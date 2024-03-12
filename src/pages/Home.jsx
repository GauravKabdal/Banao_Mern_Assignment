import Header from "../components/Header";
import Woman from "../assets/woman.webp";
import leftarrow from "../assets/arrow-118-32.png";
const Home = () => {
  return (
    <>
      <main className="vh-100 ">
        <Header />
        <div
          className="d-flex flex-column justify-content-between "
          style={{
            background: `url(${Woman}) center center / cover no-repeat`,
            height: "440px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="d-lg-none   d-flex justify-content-between mx-5 pt-4">
            <button className="border-0 bg-transparent">
              <img src={leftarrow} alt="" />
            </button>
            <button
              className="border-white  bg-transparent"
              style={{ color: "white" }}
            >
              Leave Group
            </button>
          </div>
          <div
            className="mx-5 pb-1"
            style={{ color: "white" }}
            id="Computer_text"
          >
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </div>
        <div
          className="d-none d-lg-flex d-flex  justify-content-between mx-auto align-items-center container sticky-top border-bottom "
          style={{ maxWidth: "1040px", height: "68px" }}
        >
          <div className="d-flex gap-2 ">
            <a style={{ color: "black" }} href="">
              All Posts(32)
            </a>
            <a aria-disabled style={{ color: "black" }} href="">
              Article
            </a>
            <a aria-disabled style={{ color: "black" }} href="">
              Event
            </a>
            <a aria-disabled style={{ color: "black" }} href="">
              Education
            </a>
            <a aria-disabled style={{ color: "black" }} href="">
              Job
            </a>
          </div>
          <div className="d-flex gap-2">
            <button className="border-0">Write a Post</button>
            <button
              className="border-0 bg-primary p-1 "
              style={{ color: "white" }}
            >
              Join Group
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between mx-5 d-lg-none pt-4 px-3">
          <p>Posts(382)</p>
          <button>Filter</button>
        </div>
        <section className="d-flex">
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Home;
