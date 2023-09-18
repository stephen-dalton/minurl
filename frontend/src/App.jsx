import styled from "styled-components";
import ContentContainer from "./components/ContentContainer";
const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #141e46;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <MainContainer>
      <ContentContainer />
    </MainContainer>
  );
}

export default App;
