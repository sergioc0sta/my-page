import React from 'react';
import styled from '@emotion/styled';

const TimeLineContent = styled.div`
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #333C42;
  border-radius: 2px;
  //padding: 1em;

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

`
export default TimeLineContent;