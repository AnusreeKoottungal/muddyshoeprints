import React from "react";
import { useHistory } from "react-router";
import postContents from "../content/BlogPostContents";
export default function BlogCard(props) {
  let history = useHistory();
  let content = props.content;
  let posts = postContents;
  const title = {
    //fontFamily: "'Square Peg', cursive",
  };
  let navigate = () => {
    if(content.isBlogPost){
      history.push('/blog', {content: content});
    } else {
       history.push('/travel', {blog: posts[content.key]});
    }
  };
  return (
    <div className="card shadow" onClick={navigate}>
      <img
        className="card-img-top"
        src={props.content.imageLink}
        alt={props.content.altText}
      ></img>
      <div className="card-body">
        <h5 className="card-title" style={title}>{props.content.title}</h5>
        <p className="card-text">
          {props.content.content}
        </p>
      </div>
    </div>
  );
}
