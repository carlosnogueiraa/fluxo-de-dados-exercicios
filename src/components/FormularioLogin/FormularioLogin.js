import React from "react";
import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({setPageFlow, setDados}) => {
  const [nome, setNome] = useState("")
  const [foto, setFoto] = useState("")

  const changeNome = (e) => {
    setNome(e.target.value)
  }

  const changeFoto = (e) => {
    setFoto(e.target.value)
  }

  const login = () => {
    const usuario = {
      nome: nome,
      foto: foto
    }
    setDados(usuario)
    setPageFlow(2)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={changeNome} value={nome}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} onChange={changeFoto} value={foto}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
