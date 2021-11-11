import React from "react";
import Image from "react-bootstrap/Image";

import TextContent from "../layout/TextContent";
import Section from "./Section";

export default function BlogContent(props) {
    const imageStyle = {
        height: props.blog.height ? props.blog.height : "400px",
        width: props.blog.width ? props.blog.width : "400px",
      };
    return (
        <React.Fragment>
             <div className="container-fluid" >
                <div className="container border shadow m-5">
                    <div className="m-5 text-wrap">
                  <h2 className="display-4 primary">{props.blog.title}</h2>
                  {props.blog.subText && (
                    <h5 className="display-8 text-secondary">{props.blog.subText}</h5>
                  )}
                  <br/>
                  <p style={{ position: "relative", float: "right"}}>
                    {props.blog.date}
                  </p>
                  {props.blog.imglink && (
                    <Image src={props.blog.imglink} alt={props.blog.title} style={imageStyle} />
                  )}
                  <TextContent text={props.blog.content} />
                  {props.blog.sections &&
                    props.blog.sections.length > 0 &&
                    props.blog.sections.map((section) => {
                      return (
                        <Section
                          heading={section.heading}
                          imglink={section.imglink}
                          imgText={section.imgText}
                          content={section.content}
                        ></Section>
                      );
                    })}
                  <br />
                  <br />
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
