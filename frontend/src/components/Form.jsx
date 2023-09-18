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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);
    // call api
    const response = await fetch("http://localhost:8080/shorten", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error(error);
      });

    if (response.success) {
      // wait for result
      // setState
      console.log(response);
      setUrl(`http://localhost:8080/${response.redirectID}`);
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input url={url} handleChange={handleURLInput} />
      <Button disabled={url} />
    </FormContainer>
  );
}
