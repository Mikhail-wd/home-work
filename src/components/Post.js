import React from "react";
import {useState, useRef} from "react";

function Post({userid, title, body}) {

    return  (
        <div userid={userid} className="post">
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )

}

export default Post;