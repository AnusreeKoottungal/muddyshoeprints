import React from 'react'
import Image from 'react-bootstrap/Image'
import TextContent from '../layout/TextContent';
function Section(props){
    const imageStyle= {
        height: props.height? props.height: '400px',
         width: props.width? props.width:'800px'
    }
    return <React.Fragment>
        <h5 className="mt-5" >{props.heading}</h5>
        {props.imageLink &&<React.Fragment> <img className="img-fluid" src={props.imageLink} alt={props.heading}  /><br/>
        {props.imgText && <i className="text-secondary">{props.imgText}</i>}</React.Fragment>}
        <TextContent text={props.content}/>
    </React.Fragment>
}
export default Section;