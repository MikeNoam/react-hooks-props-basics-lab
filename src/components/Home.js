import React from "react";


function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.userObj.color }}>
        {props.userObj.name} is a Web Developer from {props.userObj.city}
      </h1>
    </div>
  );
}

export default Home;
