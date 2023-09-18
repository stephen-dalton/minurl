/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputBox = styled.input`
  height: 30px;
  width: 80%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  border-radius: 5px;
  font-size: 11px;

  &::placeholder {
    text-align: center;
  }
`;

export default function Input({ url, handleChange }) {
  return (
    <InputBox
      type="text"
      placeholder="pop in a 'lil url"
      value={url}
      onChange={handleChange}
    />
  );
}
