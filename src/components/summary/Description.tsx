import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby"

const DescriptionLayout = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: flex-start;
`;

const DescriptionLayout2 = styled.div`
    width: 80%;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`;

const Description = () =>{
    const data = useStaticQuery(graphql`query getDataSummary{
        markdownRemark(fileAbsolutePath: {regex: "/summary.md/"}) {
          html
          frontmatter {
            title
            p1
            p2
            p3
          }
        }
      }`);
    
    if(!data){
        return;
    }
    
    const {title, p1, p2, p3} = data?.markdownRemark?.frontmatter
    
    return(
        <DescriptionLayout>
            <DescriptionLayout2>
                <h1>{title}</h1>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </DescriptionLayout2>
        </DescriptionLayout>
    )
}

export default Description;

  