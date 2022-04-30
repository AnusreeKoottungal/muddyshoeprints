import React from 'react'
import LocationCard from './LocationCard';
import Content from '../content/CardContent';
import Carousal from '../layout/Carousal'


export default function Home() {
    let contents = Content;
    const cursiveFont = {
        fontFamily: "'Square Peg', cursive",
        color: "black",
        fontSize: "-webkit-xxx-large",
        padding: "10px",
        textAlign: "center",
      };
    return (
        <React.Fragment>
            
            <Carousal></Carousal>
            {/* <h1 style={cursiveFont} className="cursive-font">---Travel--Food--Books---</h1> 
            <div className="container text-center">
                <div className="d-flex flex-row flex-wrap justify-content-center">
            {contents.map((content) => {
               return <LocationCard content={content} key={content.key}/>
            })}
            </div>
            </div> */}
        </React.Fragment>
    )
}
