//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"


const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(dummyData)

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post(component) and pass user as props to Post */}
      {                    //varible name
        data.map(user => <Post post={user} />)
      }
    </div>
  );
};

export default PostsPage;

