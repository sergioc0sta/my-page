import React from "react";
import Container from "../container/container";
import styled from "@emotion/styled";
import TimeLine from './TimeLine';
import TimeLimeBlock from './TimeLimeBlock';
import TimeLineImg from './TimeLineImg';
import TimeLineContent from './TimeLineContent';
import TimeLineContentInfo from './TimeLineContentInfo'
import TimeLineContentInfoTitle from './TimeLineContentInfoTitle';
import TimeLineContentInfoData from './TimeLineContentInfoData';
import ContentSkills from './ContentSkills';
import ContentSkillItem from './ContentSkillItem';
import TimeLineContentTitle from './TimeLineContentTitle';
import TimeLineContentDescription from './TimeLineContentDescription';


const ChangeContainer = styled.div`
  background-color: #222C32;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
`

const Work = () => {
    return(<ChangeContainer>
        <TimeLine>
           <TimeLimeBlock>
               <TimeLineImg />
                <TimeLineContent>
                    <TimeLineContentTitle>
                        <h2>A fazer cenas</h2>
                    </TimeLineContentTitle>
                    <TimeLineContentInfo>
                        <TimeLineContentInfoTitle>
                            Lindas
                        </TimeLineContentInfoTitle>
                        <TimeLineContentInfoData>
                            2019 - ate agora
                        </TimeLineContentInfoData>
                    </TimeLineContentInfo>
                    <TimeLineContentDescription>
                        njnkasjndkjnaksjndkjanskdnkja akjs dka skdj aksjd ajksd ak sdkja sdkja ksd kaj sdk aksd.
                    </TimeLineContentDescription>
                    <ContentSkills>
                        <ul>
                            <ContentSkillItem><li>super sandes mistas</li></ContentSkillItem>
                            <ContentSkillItem><li>super 3d</li></ContentSkillItem>
                            <ContentSkillItem><li>panados</li></ContentSkillItem>
                            <ContentSkillItem><li>mistas</li></ContentSkillItem>
                        </ul>
                    </ContentSkills>
                </TimeLineContent>
           </TimeLimeBlock>
        </TimeLine>
    </ChangeContainer>)
}

export default Work;