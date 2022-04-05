import React from 'react';
import {useState, useRef, useEffect} from "react";


function UserPlate({id, name, company}){
    const select = useRef(null)
    const [activeState, setactiveState] = useState(true)
    const [usersPosts, setUsersPosts ]= useState([])
    const imgSrc = React.useMemo(()=>(Math.floor(Math.random()*70)),[])

    useEffect(()=>{

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(response => response.json()).then(json =>  setUsersPosts(json))

    },[])

    function selectingDiv (){
        setactiveState(!activeState);
        addData();               
    }
        

    function addData(){
        if (usersPosts.length !== 0) {
        document.getElementById("rightCol").innerHTML=`
            <div class="post">
                <h3>3 актуальных поста ${name} </h3>
                <div class="post">
                    <p>${usersPosts[0].name}</p>
                    <p>${usersPosts[0].body}</p>
                </div>
                <div class="post">
                    <p>${usersPosts[1].name}</p>
                    <p>${usersPosts[1].body}</p>
                </div>
                <div class="post">
                    <p>${usersPosts[2].name}</p>
                    <p>${usersPosts[2].body}</p>
                </div>
            </div>
            `
        } else {
        }
    }

    

    

    return(
        
    <div id={id} ref={select} onClick={selectingDiv} className="user">
        <a href={"#img"+id}>
            <div id={"img"+id} className="borderDown">
                <img src={"https://i.pravatar.cc/290?img=" + imgSrc} alt="Face"/>
                <h2>{name}</h2>
                <p>{company}</p>
            </div>
        </a>
    </div>
    )
};

export default UserPlate;