import Carousel from "react-bootstrap/Carousel";
import food from "../resources/food.jpg";
import book from "../resources/book.jpg";
import travel from "../resources/travel.jpg";

function Carousal() {
  const title = {
    fontFamily: "'Square Peg', cursive",
    fontWeight: "bold",
    fontSize: "xx-large",
    textAlign: "center"
  };
  return (
    <Carousel>
      <Carousel.Item>
        <div className="m-5 border">
          <img className="card-img-top" src={travel} alt="Travel"></img>
          <h5 className="card-title" style={title}>Travel</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="m-5 border">
          <img className="card-img-top" src={food} alt="Food" />
          <h5 className="card-title" style={title}>Food</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="m-5 border">
          <img className="card-img-top" src={book} alt="Books" />
          <h5 className="card-title" style={title}>Books</h5>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousal;
