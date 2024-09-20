const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <h2>Find Your Next Destination</h2>
        <div className="search-navigation">
          <ul>
            <li>
              <i className="fas fa-home"></i> Search all
            </li>
            <li>
              <i className="fas fa-hotel"></i> Hotels
            </li>
            <li>
              <i className="fas fa-plane"></i> Flight
            </li>
            <li>
              <i className="fas fa-car"></i> Car Rentals
            </li>
          </ul>
        </div>
        <div id="search-bar">
          <div className="input">
            <label htmlFor="destination">Where?</label>
            <input type="text" placeholder="search destination" id="destination" />
          </div>
          <div className="search-stroke"></div>
          <div className="input">
            <label htmlFor="tour">Tour or Event?</label>
            <input type="text" placeholder="search tour event" id="tour" />
          </div>

          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
