import React from "react";
import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image"

const Avatar = () =>{
    return(
        <div>
            <StaticImage
            src="../../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem`, 'border-radius': `50%`, 
            'box-shadow': `rgb(44, 49, 125) 0px 15px 30px` }}/>
        </div>
    )
}

export default Avatar;