import React from 'react';
import Post from "./Post.js";

function PostsList({data}){

    return(
        data.map.slice(0,3)(index => <Post key={index.id} userid={index.userId} title={index.title} body={index.body}/>) 
    )
}

export default PostsList;