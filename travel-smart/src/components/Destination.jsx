import { memo, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer"
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  const youtubeID = "rFydxbQLDOA?si=u6MjUe0IDIsoF0uz";
  const dubai = "f2LXCW-bdGY?si=rAl5INbSsDHE3IRj";

  const navigate = useNavigate();

  const starsCount = (rating) => {
    const maxRating = 5;
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${rating >= i + 1 ? "yellow" : "gray"}`}
        ></i>
      );
    }
    return stars;
  };

  useEffect(() => {
    const card = document.querySelectorAll(".things-to-do-card-accomodations");
    card.forEach((element) => {
      element.onclick = () => {
        navigate("/accomodation");
      };
    });
  }, []);



  return (
    <>
      <Header />
      <section id="destination">
        <div className="container">
          <h1>London</h1>
          <div className="destination img">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/15/27/c7/caption.jpg?w=1400&h=500&s=1&cx=1449&cy=1404&chk=v1_a2f16dd71a988dd3384e"
              alt="destination"
            />
          </div>

          <div className="destination-info">
            <h2>About</h2>
            <p>
              London’s a sprawling city at the center of everything: art,
              history, culture—you name it. But what sets it apart from other
              major hubs are its distinct neighborhoods, each with their own
              vibe. Spend an afternoon with the fam in Kensington: It’s got
              museums, parks
            </p>
          </div>

          <div className="destination-video mt">
            <h2>Welcome to London</h2>
            <div className="welcome-video">
              {/* <iframe
                width="100%"
                height="400"
                src={`https://www.youtube-nocookie.com/embed/${youtubeID}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              /> */}
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube-nocookie.com/embed/${youtubeID}?autoplay=1&mute=1&modestbranding=1&showinfo=0&rel=0&controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="things-to-do mt">
            <h2>Things to Do</h2>
            <div className="card-container">
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c0/dc/f8/tower-of-london-white.jpg?w=600&h=-1&s=1&cx=2515&cy=1577&chk=v1_1e1764bee68456e4ca27)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Tower of London</h4>
                <div>{starsCount(4.8)}</div>
                <p>Architectural Buildings, Historic Sites</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a4/e6/c1/photo0jpg.jpg?w=600&h=400&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Tower of London</h4>
                <div>{starsCount(3.8)}</div>
                <p>Architectural Buildings, Historic Sites</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3f/87/d2/st-paul-s-cathedral.jpg?w=600&h=400&s=1",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Tower of London</h4>
                <div>{starsCount(4.8)}</div>
                <p>Architectural Buildings, Historic Sites</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c0/dc/f8/tower-of-london-white.jpg?w=600&h=-1&s=1&cx=2515&cy=1577&chk=v1_1e1764bee68456e4ca27)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Tower of London</h4>
                <div>{starsCount(4.8)}</div>
                <p>Architectural Buildings, Historic Sites</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a4/e6/c1/photo0jpg.jpg?w=600&h=400&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Tower of London</h4>
                <div>{starsCount(3.8)}</div>
                <p>Architectural Buildings, Historic Sites</p>
              </div>
              <div className="things-to-do-card">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3f/87/d2/st-paul-s-cathedral.jpg?w=600&h=400&s=1",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Tower of London</h4>
                <div>{starsCount(4.8)}</div>
                <p>Architectural Buildings, Historic Sites</p>
              </div>
            </div>
          </div>

          <div className="stays mt">
            <h2>Places to stays</h2>
            <div className="card-container">
              <div className="things-to-do-card-accomodations" >
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/1c/30/caption.jpg?w=600&h=-1&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Bankside Hotel, Autograph Collection</h4>
                <div>{starsCount(5)}</div>
                <p>from $285/night</p>
              </div>
              <div className="things-to-do-card-accomodations">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/fd/5a/03/caption.jpg?w=600&h=-1&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>Hotel 41</h4>
                <div>{starsCount(4)}</div>
                <p>from $385/night</p>
              </div>
              <div className="things-to-do-card-accomodations">
                <div
                  className="things-to-do-image"
                  style={{
                    backgroundImage:
                      "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/28/24/hotel-cafe-royal-junior.jpg?w=600&h=-1&s=1)",
                  }}
                >
                  <div className="heart-icon-container">
                    <div>
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
                <h4>The Hotel Cafe</h4>
                <div>{starsCount(4)}</div>
                <p>from $405/night</p>
              </div>
            </div>
          </div>

          <div className="transport-options mt">
            <div className="city-info w-50">
              <h2>Getting to London</h2>
              <div className="info-section">
                <h4>
                  Flying <i className="fa-solid fa-plane"></i>
                </h4>
                <p>London has six international airports.</p>
              </div>
              <div className="info-section">
                <h4>
                  Train <i className="fa-solid fa-train"></i>
                </h4>
                <p>
                  St Pancras railway station serves high-speed Eurostar
                  services.
                </p>
              </div>
              <div className="info-section">
                <h4>
                  Visa Requirements <i className="fa-solid fa-passport"></i>
                </h4>
                <p>Check the government's visa survey for requirements.</p>
              </div>
              <div className="info-section">
                <h4>
                  Best Time to Visit <i className="fa-solid fa-calendar"></i>
                </h4>
                <p>Summer (June-Aug) or holiday season (Dec-Jan).</p>
              </div>
            </div>

            <div className="getting-around w-50">
              <h2>Getting Around London</h2>
              <div className="info-section">
                <h4>
                  Bicycle <i className="fa-solid fa-bicycle"></i>
                </h4>
                <p>Santander Cycles bike-share system.</p>
              </div>
              <div className="info-section">
                <h4>
                  Tube <i className="fa-solid fa-subway"></i>
                </h4>
                <p>London's Underground rail network.</p>
              </div>
              <div className="info-section">
                <h4>
                  Bus <i className="fa-solid fa-bus"></i>
                </h4>
                <p>London's 24-hour bus route network.</p>
              </div>
              <div className="info-section">
                <h4>
                  Taxis <i className="fa-solid fa-taxi"></i>
                </h4>
                <p>Find official taxi stands or book online.</p>
              </div>
              <div className="info-section">
                <h4>
                  Ridesharing <i className="fa-solid fa-car"></i>
                </h4>
                <p>Uber, Bolt, and Kapten available.</p>
              </div>
              <div className="info-section">
                <h4>
                  Trams <i className="fa-solid fa-tram"></i>
                </h4>
                <p>Tramlink operates in South London.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default memo(Destination);
