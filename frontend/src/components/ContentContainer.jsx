import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Form from "./Form";
const ResponsiveContainer = styled.div`
  background-color: #1c2a63;
  height: 250px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0 auto; /* Center the div horizontally */

  /* Responsive CSS for tablets */
  @media (max-width: 768px) {
    width: 80%; /* Adjust width for tablets */
  }

  /* Responsive CSS for phones */
  @media (max-width: 425px) {
    width: 90%; /* Full width on phones */
    height: 60dvh; /* Adjust height for phones */
  }
`;
export default function ContentContainer() {
  return (
    <ResponsiveContainer>
      <Logo />
      <Form />
    </ResponsiveContainer>
  );
}
