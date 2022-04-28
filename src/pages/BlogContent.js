import React from "react";

import TextContent from "../layout/TextContent";
import Section from "./Section";
import { useLocation } from "react-router-dom";

export default function BlogContent(props) {
  const location = useLocation();
  const blog = location.state.blog;
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container border shadow">
          <div className="m-5 text-wrap">
            <h2 className="display-4 primary">{blog.title}</h2>
            {blog.subText && (
              <h5 className="display-8 text-secondary">{blog.subText}</h5>
            )}
            <br />
            <p style={{ position: "relative", float: "right" }}>{blog.date}</p>
            {blog.imageLink && (
              <img
                className="img-fluid"
                src={blog.imageLink}
                alt={blog.title}
              />
            )}
            <TextContent text={blog.content} />
            {blog.sections &&
              blog.sections.length > 0 &&
              blog.sections.map((section) => {
                return (
                  <Section
                    heading={section.heading}
                    imageLink={section.imageLink}
                    imgText={section.imgText}
                    content={section.content}
                    key={Math.random()}
                  ></Section>
                );
              })}
            <br />
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
