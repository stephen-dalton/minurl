/* eslint-disable react/prop-types */
/**
 * Inpiration for the button taken from Josh W. Comeau
 */

import styled from "styled-components";

const PushableButton = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;

  &:hover {
    filter: brightness(110%);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
`;

const Front = styled.span`
  display: block;
  position: relative;
  padding: 2px 107px;
  border-radius: 5px;
  font-size: 1.1rem;
  color: white;
  background: #bb2525;
  will-change: transform;
  transform: translateY(-5px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);

  ${PushableButton}:hover & {
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${PushableButton}:active & {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
`;

export default function Button({}) {
  return (
    <PushableButton>
      <Shadow />
      <Edge />
      <Front>make me mini!</Front>
    </PushableButton>
  );
}
