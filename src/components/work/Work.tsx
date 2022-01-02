import React from "react";
import Container from "../container/container";
import styled from "@emotion/styled";
import TimeLine from './TimeLine';
import TimeLimeBlock from './TimeLimeBlock';
import TimeLineImg from './TimeLineImg';
import { TimeLineContentMain }  from './TimeLineContent';
import TimeLineContentInfo from './TimeLineContentInfo'
import TimeLineContentInfoTitle from './TimeLineContentInfoTitle';
import TimeLineContentInfoData from './TimeLineContentInfoData';
import ContentSkills from './ContentSkills';
import ContentSkillItem from './ContentSkillItem';
import TimeLineContentTitle from './TimeLineContentTitle';
import TimeLineContentDescription from './TimeLineContentDescription';


const ChangeContainer = styled.div`
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
`

const Work = () => {
    return(
    <ChangeContainer>
        <TimeLine>
           <TimeLimeBlock>
               <TimeLineImg />
                <TimeLineContentMain>
                    <TimeLineContentTitle>
                        A fazer cenas
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
                            <ContentSkillItem>super sandes mistas</ContentSkillItem>
                            <ContentSkillItem>super 3d</ContentSkillItem>
                            <ContentSkillItem>panados</ContentSkillItem>
                            <ContentSkillItem>mistas</ContentSkillItem>
                    </ContentSkills>
                </TimeLineContentMain>
           </TimeLimeBlock>
           <TimeLimeBlock>
               <TimeLineImg />
                <TimeLineContentMain>
                    <TimeLineContentTitle>
                        A fazer cenas
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
                            <ContentSkillItem>super sandes mistas</ContentSkillItem>
                            <ContentSkillItem>super 3d</ContentSkillItem>
                            <ContentSkillItem>panados</ContentSkillItem>
                            <ContentSkillItem>mistas</ContentSkillItem>
                    </ContentSkills>
                </TimeLineContentMain>
           </TimeLimeBlock>
        </TimeLine>
    </ChangeContainer>)
}

export default Work;