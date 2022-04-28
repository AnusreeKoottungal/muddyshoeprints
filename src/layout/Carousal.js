import Carousel from "react-bootstrap/Carousel";
import food from "../resources/food.jpg";
import book from "../resources/book.jpg";
import travel from "../resources/travel.jpg";
function Carousal() {
  const carousalImg = {
    height: "200px !important",
    width: "100% !important",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={travel} alt="Travel" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={food} alt="Food" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={book} alt="Books" />
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousal;
