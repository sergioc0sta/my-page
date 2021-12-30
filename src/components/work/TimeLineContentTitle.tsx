import React from 'react';
import styled from '@emotion/styled';
import TimeLineContent from './TimeLineContent';

const TimeLineContentTitle = styled(TimeLineContent)`
  & > h2 {
    color: rgba(199, 173, 173, 0.9);
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export default TimeLineContentTitle;