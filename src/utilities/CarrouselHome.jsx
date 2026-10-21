import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselHome() {
  return (
    <div className="flex justify-center items-center">
      <div style={{ display: "block", width: 1300, padding: 30 }}>
        <Carousel fade>
          <Carousel.Item>
            <img
              src="src/assets/567f3a1fbb88e3b69b475f09a5a92d64-3098093493.jpg"
              alt="Image One"
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/cristiano-ronaldo-manchester-united_11y9mzgadtgto1ijccmm0k10qy-4174078644.jpg"
              alt="Image Two"
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/cristiano-ronaldo-manchester-united-goal-pose-gci3sblv4abnui8u-2043014273.jpg"
              alt=""
              className="d-block h-130 w-100 object-cover md:h-full md:w-10 rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/cristiano-ronaldo-portugal-nations-league-trophy-2019_dfy3l64lmayi14hflflfxzn3s-2330312099.jpg"
              alt=""
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/76ec24140ccb82de0283278f25ef937d8bf871fd-124696252.jpg"
              alt=""
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/wp5912131-4008377679.jpg"
              alt=""
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/9203549-1844360295.jpg"
              alt=""
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="src/assets/469675-574112064.jpg"
              alt=""
              className="d-block h-130 w-100 object-cover md:h-full md:w-full rounded"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselHome;
