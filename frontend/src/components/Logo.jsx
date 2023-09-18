import React from "react";
import styled from "styled-components";

const LogoContainerOuter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const LogoContainerInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff5e0;
  font-size: 65px;
`;

const LogoSpan = styled.span`
  color: inherit;
  font-size: inherit;
`;

const LogoSpanUpper = styled.span`
  color: inherit;
  font-size: inherit;
`;

const LogoMiddle = styled.span`
  position: relative;
  display: inline-block;
  width: 15px;
`;

const LogoMiddleLetter = styled.span`
  color: #ff6969;
  position: absolute;
  bottom: -5px;
  transform: rotate(-20deg);
  font-size: 35px;
`;
const LogoMiddleArrowUp = styled.span`
  color: #ff6969;
  position: absolute;
  font-size: 30px;
  left: 5px;
`;

const LogoTagLine = styled.p`
  color: #ff6969;
  font-size: 9.5px;
  font-family: "Montserrat", sans-serif;
  position: absolute;
  bottom: 5px;
`;
export default function Logo() {
  return (
    <LogoContainerOuter>
      <LogoContainerInner>
        <LogoSpan>min</LogoSpan>
        <LogoMiddle>
          <LogoMiddleLetter>i</LogoMiddleLetter>
          <LogoMiddleArrowUp>^</LogoMiddleArrowUp>
        </LogoMiddle>
        <LogoSpanUpper>URL</LogoSpanUpper>
      </LogoContainerInner>
      <LogoTagLine>Making URLs mini since some time in the past...</LogoTagLine>
    </LogoContainerOuter>
  );
}
