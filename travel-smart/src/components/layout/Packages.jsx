import { useNavigate } from 'react-router-dom';

const Packages = () => {

  const navigate = useNavigate();

  const goToTour = () => {
    navigate("/destination");
  };

  return (
    <section id="packages" onClick={goToTour}>
      <div className="container">
        <h2>Popular Destinations</h2>

        <div className="package-card"></div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/28/f0/43/caption.jpg?w=300&h=300&s=1"
          alt="Paris"
        />
        <h3>Paris, France</h3>
        <p>Cultural Tour - $1200</p>
        <a href="#paris-tour">View Details</a>
      </div>
    </section>
  );
};

export default Packages;
