import React from "react";

function TextContent(props) {
  let paragraphs = props.text?.split("</p>");
  return (
    <React.Fragment>
      <div className="mt-5">
        {paragraphs?.map((paragraph) => {
          return <p key={paragraph}>{paragraph}</p>;
        })}
      </div>
    </React.Fragment>
  );
}
export default TextContent;
