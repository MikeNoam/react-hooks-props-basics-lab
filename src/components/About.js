import React from "react";
import App from "./App";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bioObj.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* { add your <Links />} */}
      {/* <p>{props.linksObj.links}</p> */}
    </div>
  );
}

export default About;
