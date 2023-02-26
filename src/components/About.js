import React from "react";
import Links from "./Links";

function About({bio, links}) {
  
  return (
    <div id="about">
      <h2>About Me</h2>
      
        {/* if (bio) {
          <p>bio</p>
        }
      */}
          {bio && <p>{bio}</p>}

      {/* <p>{bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    <Links github = {links.github} linkedin = {links.linkedin}/>
      {/* <p>{props.linksObj.links}</p> */}
    </div>
  );
}

export default About;
