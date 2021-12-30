import styled from '@emotion/styled';
import React from 'react';

const TimeLine = styled.section`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  background: #2B343A;
  padding: 0 10%;
  border-radius: 2px;
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;

  ::after{
    content: '';
    display: table;
    clear: both;
    
  }
    ::before{
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
    @media only screen and (min-width: 1170px) {
      margin-top: 3em;
      margin-bottom: 3em;
    }
  
  
`



export default TimeLine;