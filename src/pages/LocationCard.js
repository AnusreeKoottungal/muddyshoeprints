import React from "react";
import { useHistory } from "react-router";
export default function LocationCard(props) {
  let history = useHistory();
  let content = props.content;
  let navigate = () => {
    history.push('/blog', {blog: content});
  };
  return (
    <div
      className="card shadow m-5"
      style={{ width: "15rem" }}
      onClick={navigate}
    >
      <img
        className="card-img-top"
        src={content.imageLink}
        alt={content.altText}
      ></img>
      <div className="card-body" height="200px">
        <h5 className="card-title">{content.title}</h5>
        <p className="card-text">{content.subText}</p>
      </div>
    </div>
  );
}
