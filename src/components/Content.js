import React from 'react';
import wierdShapes from "./img/shapes/Group 18.svg";
import vector from "./img/shapes/Vector.svg"
import PostsList from "./PostsList.js"

function Content(){

    return(
        <div className="content">
            <div className="leftCol">
                <img src={vector} alt=""/>
                <div className="wierdShapesBottom">
                    <img src={wierdShapes} alt="wierd shapes"/>
                </div>
            </div>
            <div id="rightCol"className="rightCol">
                <h3>3 актуальных поста Delphin </h3>                
            </div>
        </div>
        
    );
}

export default Content;