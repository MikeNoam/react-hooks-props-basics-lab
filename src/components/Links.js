import React from "react";

function  Links({github, linkedin}) {
    
    return (
        <div>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </div>
    )
}

export default Links;