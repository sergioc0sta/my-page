import React from 'react';
import styled from '@emotion/styled';

export const TimeLineContent = styled.div`
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #0000003B;
  border-radius: 2px;
  padding: 1em;

  @media only screen and (min-width: 1170px) {
      color: white;
      margin-left: 0;
      padding: 1.6em;
      width: 36%;
      margin: 0 5%
  }
`
export const TimeLineContentMain = styled(TimeLineContent)`
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

    @media only screen and (min-width: 1170px) {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #333C42;
    }
  }
`
