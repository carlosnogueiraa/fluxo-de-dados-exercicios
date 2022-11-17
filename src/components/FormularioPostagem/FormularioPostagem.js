import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({setPosts}) => {

  const [titulo, setTitulo] = useState("")
  const [imagem, setImagem] = useState("")
  const [descricao, setDescricao] = useState("")

  const changeTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const changeImagem = (e) => {
    setImagem(e.target.value)
  }

  const changeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const post = {
    titulo: titulo,
    imagem: imagem,
    descricao: descricao
  }

  const postar = () => {
    setPosts(post)
    setTitulo("")
    setImagem("")
    setDescricao("")
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" onChange={changeTitulo} value={titulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={changeImagem} value={imagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={changeDescricao} value={descricao}/>
        </StyledLabel>
        <SendButton onClick={postar}>Enviar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

