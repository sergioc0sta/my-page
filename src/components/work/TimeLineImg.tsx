import React from 'react';
import styled from '@emotion/styled';

const TimeLineImg = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #7E57C2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  background: #673AB7;

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

export default TimeLineImg;