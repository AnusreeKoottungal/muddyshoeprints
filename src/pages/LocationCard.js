import React from "react";
import { useHistory } from "react-router";
import postContents from "../content/BlogPostContents";

export default function LocationCard(props) {
  let history = useHistory();
  let content = props.content;
  const title = {
    fontFamily: "'Square Peg', cursive",
    fontWeight: "bold",
    fontSize: "xx-large",
  };
  let navigate = () => {
    if (content.isBlogPost) {
      history.push("/blog", { blog: content });
    } else {
      history.push("/travel", {
        blog: postContents[content.key],
        location: content.key,
      });
    }
  };
  return (
    <div
      className="card shadow m-4"
      style={{ width: "20rem", margin:  "1rem !important"}}
      onClick={navigate}
    >
      <img
        className="card-img-top"
        height="200px !important"
        src={content.imageLink}
        alt={content.altText}
      ></img>
      <div className="card-body" height="200px !important">
        <h5 className="card-title" style={title}>{content.title}</h5>
        <p className="card-text">{content.subText}</p>
      </div>
    </div>
  );
}
