import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export default function Form() {
  const [url, setUrl] = useState("");

  const handleURLInput = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
    // call api
    // wait for result
    // setState
    setUrl("https://localhost/miniUrl");
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input url={url} handleChange={handleURLInput} />
      <Button disabled={url} />
    </FormContainer>
  );
}
