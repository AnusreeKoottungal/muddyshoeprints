import React from "react";

export default function BlogCard(props) {
  return (
    <div className="card shadow m-5">
      <img
        className="card-img-top"
        src={props.content.imageLink}
        alt={props.content.altText}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.content.title}</h5>
        <p className="card-text">
          {props.content.content}
        </p>
      </div>
    </div>
  );
}
