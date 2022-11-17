import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [dados, setDados] = useState({
    nome: "",
    foto: ""
  })

  const [posts, setPosts] = useState({
    titulo: "",
    imagem: "",
    descricao: ""
  })

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header dados={dados}/>
          {pageFlow === 1 ? (
            <FormularioLogin setPageFlow={setPageFlow} setDados={setDados}/>
          ) : (
            <FormularioPostagem setPosts={setPosts}/>
          )}
        </aside>
        <TelaDaPostagem posts={posts}/>
      </Container>
    </>
  );
}

export default App;
