import React from 'react';
import styled from '@emotion/styled';

const TimeLimeBlock = styled.div`
  position: relative;
  margin: 2em 0;

  @media only screen and (min-width: 1170px) {
    margin: 4em 0;
  }
  
  ::after{
    content: "";
    display: table;
    clear: both;

    @media only screen and (min-width: 1170px) {
      margin-top: 0;
    }
  }
  
  :first-child{
    margin-top: 0;
    @media only screen and (min-width: 1170px) {
      margin-top: 0;
    }
  }
  
  :last-child {
    margin-bottom: 0;
    @media only screen and (min-width: 1170px) {
      margin-bottom: 0;
    }
  }
  
`;

export default TimeLimeBlock;
