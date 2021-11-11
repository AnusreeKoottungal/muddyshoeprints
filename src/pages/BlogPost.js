import React from "react";
import Content from "../content/BlogPostContents";
import BlogContent from "./BlogContent";

export default function BlogPost() {
  let content = Content;
  const imageStyle = {
    height: content.height ? content.height : "400px",
    width: content.width ? content.width : "400px",
  };
  return (
    <React.Fragment>
      {true &&
        content.map((ct) => {
          return (
           <BlogContent blog={ct} key={Math.random()}></BlogContent>
          );
        })}
    </React.Fragment>
  );
}
