import React from 'react';
import styled from '@emotion/styled';
import TimeLineContentInfo from './TimeLineContent';

const ContentSkills = styled(TimeLineContentInfo)`
  & > ul {
    font-size: 12px;
    padding:0;
    margin-bottom: 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default ContentSkills;
