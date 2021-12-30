import React from 'react';
import styled from '@emotion/styled';
import TimeLineContent from './TimeLineContent';

const Conas = styled.p`
   color: rgba(255,255,255,.7);
   font-size: 13px;
   font-size: 0.8125rem;
   margin: 1em 0;
   line-height: 1.6;
 
`;

const TimeLineContentDescription = ({children})=>(
    <TimeLineContent>
        <Conas>
            {children}
        </Conas>
    </TimeLineContent>
)
export default TimeLineContentDescription;