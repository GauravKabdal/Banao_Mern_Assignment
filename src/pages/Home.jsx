import Header from "../components/Header";
import Woman from "../assets/woman.webp";
import leftarrow from "../assets/arrow-118-32.png";
import Article_1 from "../assets/Article_1.png";
import editPen from "../assets/edit_pen.svg";
import dots from "../assets/3_dots.svg";
import Author from "../assets/Author.png";
import Share from "../assets/Share.svg";
import views from "../assets/views.svg";
import { useState } from "react";

const Home = () => {
  const [status, setStatus] = useState("Leave Group");

  const handleStatus = () => {
    setStatus((prevState) =>
      prevState === "Leave Group" ? "Join Group " : "Leave Group"
    );
  };
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
              className="border-white"
              style={{ color: "white", backgroundColor: "#1a1919bd" }}
              onClick={handleStatus}
            >
              {status}
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
            <a
              aria-disabled
              style={{ color: "black", textDecoration: "none" }}
              href=""
            >
              Article
            </a>
            <a
              aria-disabled
              style={{ color: "black", textDecoration: "none" }}
              href=""
            >
              Event
            </a>
            <a
              aria-disabled
              style={{ color: "black", textDecoration: "none" }}
              href=""
            >
              Education
            </a>
            <a
              aria-disabled
              style={{ color: "black", textDecoration: "none" }}
              href=""
            >
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
        <div className="d-flex justify-content-between mx-5 d-lg-none pt-4 px-3 flex-wrap ">
          <p>Posts(382)</p>
          <button className="border-0 px-3 py-2">Filter</button>
        </div>
        <section className="d-flex justify-content-evenly mb-3 pt-3">
          <div
            style={{ maxWidth: "692px ", maxHeight: "472px" }}
            className="d-flex flex-column gap-2 border border-black pb-3"
          >
            <img
              className="img-fluid"
              src={Article_1}
              alt="Aricle Image"
              style={{ maxWidth: "692px", maxHeight: "220px" }}
            />
            <div className="px-4">
              <p>✍️ Article</p>
              <div className="d-flex justify-content-between ">
                <h5>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h5>
                <img src={dots} alt="" />
              </div>
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <div className="d-flex align-content-center align-items-center justify-content-between ">
                <div className="d-flex align-content-center align-items-center">
                  <img src={Author} alt="Author" />
                  <h6>Sarthak Verma</h6>
                </div>

                <div className="d-flex align-content-center align-items-center gap-5">
                  <div className="d-flex">
                    <img src={views} alt="Views" />
                    1.4k views
                  </div>
                  <img src={Share} alt="Share" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex flex-column gap-3">
            <div className="d-flex justify-content-between align-items-center ">
              <p>Noida,India</p>
              <img src={editPen} alt="pen" />
            </div>
            <p style={{ width: "243px", height: "32px", fontSize: "10px" }}>
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
