import React from "react";
import Content from "../content/BlogPostContents";
import LocationCard from "./LocationCard";

export default function BlogPost() {
  let content = Content;
  const imageStyle = {
    height: content.height ? content.height : "400px",
    width: content.width ? content.width : "400px",
  };
  return (
    <React.Fragment>
      <div className="container text-center">
          <div className="d-flex flex-row flex-wrap justify-content-center">
      {true &&
        content.map((ct) => {
  
          return (
              ct.isBlogPost && <LocationCard content={ct} key={Math.random()} />
          );
        })}
        </div>
        </div>
    </React.Fragment>
  );
}
