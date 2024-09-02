import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";

import './App.css';
const Main = styled.div`
display: flex;
  justify-content: left;
  align-items: left;
`;
    const App = () => {
      return (
        <div>
        <Main>
          <GlobalStyles/>
          <Tracker/>
        </Main>
        
        </div>
      );
    }


export default App;