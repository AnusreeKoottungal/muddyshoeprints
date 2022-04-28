import React from "react";
import Content from "../content/BlogPostContents";
import LocationCard from "./LocationCard";
import { useLocation } from "react-router-dom";

export default function BlogPost() {
  const location = useLocation();

  const cont = Content;
  let blogLocation;
  let content = [];
  if (location.state && location.state.location) {
    blogLocation = location.state.location;
    content = cont[blogLocation];
  } else {
    Object.keys(cont).forEach((ct) => {
      cont[ct].forEach((post) => {
        content.push(post);
      });
    });
  }
  window.history.replaceState(null, "");
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {true &&
            content.map((ct) => {
              return (
                ct.isBlogPost && (
                  <LocationCard content={ct} key={Math.random()} />
                )
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
