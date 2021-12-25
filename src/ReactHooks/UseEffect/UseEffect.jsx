import React, { useState, useEffect } from "react";

function Resource() {
  const [resourcetype, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed");
    return ()=>{
       console.log("meant for cleanup on resouce changing")
    }
  }, [resourcetype]);
  return (
    <div>
      <button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </button>
    </div>
  );
}
export default Resource;

/*
The main purpose of useEffect is to perform side effects ,which you want on a specific action ,like when the 
component is mounting,unmounting or updating .
Here we can use the resource type and then update it whenever the resource type changes
*/
