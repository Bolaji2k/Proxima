import Contact from "./layout/Contact";
import About from "./layout/About";
import Packages from "./layout/Packages";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const header = document.querySelector("header");
    const logotext = document.querySelector(".header h1 ");
    const logo = document.querySelector(".logo");

    

    window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", window.scrollY > 0);
      logotext.classList.toggle("primary-color", window.scrollY > 0);
      logo.classList.toggle("alternate-logo", window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <section className="hero-header">
        <header>
          <div className="container">
            <div className="header">
              <h1>
                <i className="logo"></i>
                TravelSmart
              </h1>
              <nav>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#packages">Tours</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <section id="hero">
          <div className="container">
            <h2>Discover Your Next Adventure</h2>
            <h3>
              Explore the best tours, destinations, and activities worldwide
            </h3>
            <div>
              <a href="#explore">
                <button id="hero-button" type="button">
                  Explore
                </button>
              </a>
            </div>
          </div>
        </section>
      </section>
      <Packages />
      <About />
      <Contact />
    </>
  );
};

export default Home;
