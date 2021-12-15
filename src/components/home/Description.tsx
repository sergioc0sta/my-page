import React from "react";
import styled from "@emotion/styled";

const DescriptionLayout = styled.div`
    background: blue;
    
`;

const DescriptionLayout2 = styled.div`
    height: 75%;
    background: red;
    width: 90%;
`;


const Description = () =>{
    return(
        <DescriptionLayout>
            <DescriptionLayout2>
                <h1>Description</h1>
                <p>njkanskdjnajnjdajksndjanskjdnajanksndkans ajs dkaj skdj aksjd kajs dkja skjd kaj sdkja skj dkaj sdkj aksd ajs dkja skd aksjd kajs dka sdkja ksdj aksd</p>
            </DescriptionLayout2>
        </DescriptionLayout>
    )
}

export default Description;