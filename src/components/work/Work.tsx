import React from "react";
import Container from "../container/container";
import styled from "@emotion/styled";

const ChangeContainer = styled(Container)`
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    background: #2B343A;
    padding: 0 10%;
    border-radius: 2px;
`

const ContainerCenas = styled.section`
    height: calc(var(--heightMainComponent) - var(--heightHeader));
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    background: #2B343A;
    padding: 0 10%;
    border-radius: 2px;

    ::after {
        content: '';
        display: table;
        clear: both;
      }
`


const TimeLine = styled.div`
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
    @media only screen and (min-width: 1170px) {
        margin-top: 3em;
        margin-bottom: 3em;
    }

    ::before {
        content: '';
        position: absolute; 
        top: 0;
        left: 25px;
        height: 100%;
        width: 4px;
        background: #7E57C2;

        @media only screen and (min-width: 1170px) {
            left: 50%;
            margin-left: -2px;
        }
      }
`

const TimeLineBlock = styled.div`
    position: relative;
    margin: 2em 0;
    
    @media only screen and (min-width: 1170px) {
        margin: 4em 0;
    }
    
    ::after {
        content: "";
        display: table;
        clear: both;
    }

    ::first-child {
        margin-top: 0;

        @media only screen and (min-width: 1170px) {
            margin-top: 0;
        }
    }


    ::last-child {
        margin-bottom: 0;
        
        @media only screen and (min-width: 1170px) {
            margin-bottom: 0;
        }
      }
`

const TimeLineImg = styled.div`
        position: absolute;
    top: 8px;
    left: 12px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #7E57C2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    background: #red

    @media only screen and (min-width: 1170px) {
          width: 30px;
          height: 30px;
          left: 50%;
          margin-left: -15px;
          margin-top: 15px;
          /* Force Hardware Acceleration in WebKit */
          -webkit-transform: translateZ(0);
          -webkit-backface-visibility: hidden;
      }
`

const TimeLineContent = styled.div`
    position: relative;
    margin-left: 60px;
    margin-right: 30px;
    background: #333C42;
    border-radius: 2px;
    padding: 1em;
    
    @media only screen and (min-width: 768px) {
        font-size: 14px;
        font-size: 0.875rem;
    }

    ::after {
        content: "";
        display: table;
        clear: both;
    }

    ::before {
        content: '';
        position: absolute;
        top: 16px;
        right: 100%;
        height: 0;
        width: 0;
        border: 7px solid transparent;
        border-right: 7px solid #333C42;
    }

    & > h2 {
        color: rgba(255,255,255,.9);
        margin-top:0;
        margin-bottom: 5px;

        @media only screen and (min-width: 768px) {
            font-size: 20px;
            font-size: 1.25rem;
        }
    }

    & > p {
        color: rgba(255,255,255,.7);
        font-size: 13px;
        font-size: 0.8125rem;
        margin: 1em 0;
        line-height: 1.6;

        @media only screen and (min-width: 768px) {
            font-size: 16px;
            font-size: 1rem;
        }
    }
`


const TimeLineContentInfo = styled.div`
    background: #2B343A;
    padding: 5px 10px;
    color: rgba(255,255,255,0.7);
    font-size: 12px;
    box-shadow:  inset 0 2px 0 rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    i {
        margin-right: 5px;
    }
`

const TimeLineContentInfoTitle = styled.span`
    width: calc(50% - 2px);
    display: inline-block;

    @media (max-width: 500px) { 
        display: block;
        width:100%;
    }
`;

const TimeLineContentInfoDate = styled.span`
    width: calc(50% - 2px);
    display: inline-block;

    @media (max-width: 500px) { 
        display: block;
        width:100%;
    }
`;

const ContentSkill = styled.div`
    font-size: 12px;
    padding:0;
    margin-bottom: 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

    & > li {
        background: #40484D;
        border-radius: 2px;
        display: inline-block;
        padding: 2px 10px;
        color: rgba(255,255,255,0.7);
        margin: 3px 2px;
        text-align: center;
        flex-grow: 1;
    }
`
const Work = () => {
    return(
        <ContainerCenas>
            <TimeLineBlock>
                <TimeLineImg />

                <TimeLineContent>
                    <h2>Penta Consulting</h2>
                    <TimeLineContentInfo>
                        <TimeLineContentInfoTitle>
                            
                            Front End Developer
                        </TimeLineContentInfoTitle>
                        <TimeLineContentInfoDate>
                            
                            June 2016 - Present
                        </TimeLineContentInfoDate>
                    </TimeLineContentInfo>
                </TimeLineContent>
                <p>Working alongside the designer team implementing the designs, also developing custom solutions to address team necessities.</p>
                
            </TimeLineBlock>
        </ContainerCenas>
    )
}

export default Work;