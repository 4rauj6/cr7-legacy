import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselHome() {
  return (
    <div className="flex justify-center items-center">
      <div style={{ display: "block", width: 1300, padding: 30 }}>
        <h2>The GOAT through the history</h2>
        <Carousel fade>
          <Carousel.Item>
            <img
              src="src/assets/567f3a1fbb88e3b69b475f09a5a92d64-3098093493.jpg"
              alt="Image One"
              className="d-block w-100 rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/cristiano-ronaldo-manchester-united_11y9mzgadtgto1ijccmm0k10qy-4174078644.jpg"
              alt="Image Two"
              className="d-block w-100 rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/cristiano-ronaldo-manchester-united-goal-pose-gci3sblv4abnui8u-2043014273.jpg"
              alt=""
              className="d-block w-100 rounded"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselHome;
