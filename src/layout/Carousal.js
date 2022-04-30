import Carousel from "react-bootstrap/Carousel";
import food from "../resources/food.jpg";
import book from "../resources/book.jpg";
import travel from "../resources/travel.jpg";

function Carousal() {
  const title = {
    fontFamily: "'Square Peg', cursive",
    fontWeight: "bold",
    fontSize: "xx-large",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img className="card-img-top" src={travel} alt="Travel"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img className="card-img-top" src={food} alt="Food" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="card-img-top" src={book} alt="Books" />
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousal;
