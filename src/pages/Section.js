import React from "react";
import TextContent from "../layout/TextContent";
function Section(props) {
  return (
    <React.Fragment>
      <h5 className="mt-5">{props.heading}</h5>
      {props.imageLink && (
        <React.Fragment>
          {" "}
          <img
            className="img-fluid"
            src={props.imageLink}
            alt={props.heading}
          />
          <br />
          {props.imgText && <i className="text-secondary">{props.imgText}</i>}
        </React.Fragment>
      )}
      <TextContent text={props.content} />
    </React.Fragment>
  );
}
export default Section;
