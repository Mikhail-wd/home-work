import React from 'react';
import { useEffect, useState } from 'react';
import leftArrow from "./img/bi_arrow-left-circle-fill.svg";
import rightArrow from "./img/bi_arrow-right-circle-fill.svg";
import vector from "./img/shapes/Vector.svg"
import wierdShapes from "./img/shapes/Group 18.svg";
import UsersList from "./UsersList.js";



function SliderDriver(){         
    
    const [userData, setUserData] = useState([]);
    const [value, setValue] = useState(0);
    
    useEffect(()=>{
    
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUserData(json))            
    },[]);
    
    function turnLeft(){
        return setValue(Math.min((value+340), 0));        
    }

    function turnRight(){
        return setValue(Math.max((value-340), -((userData.length-4)*340)));
    }


    return(
        <>
            <div className="slider">
                <div className="arrows" >
                    <img src={leftArrow} className="leftArrow" onClick={turnLeft} alt="left"/>
                    <img src={rightArrow} className="rightArroe" onClick={turnRight} alt="right"/>
                    <div className="wierdShapes">
                        <img src={wierdShapes} alt="wierd shapes"/>
                    </div>
                </div>
                <div className="wrap">
                    <div className="faceTablet" style={{
                        transform: `translateX(${value}px)`
                    }} ><UsersList data={userData} value={value}/>               
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="leftCol">
                    <img src={vector} alt=""/>
                    <div className="wierdShapesBottom">
                        <img src={wierdShapes} alt="wierd shapes"/>
                    </div>
                </div>
                <div id="rightCol"className="rightCol">               
                </div>
            </div>
        </>
    );
}


export default SliderDriver;