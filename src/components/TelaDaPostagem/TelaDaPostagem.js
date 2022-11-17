import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({posts}) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{posts.titulo ? posts.titulo : "Insira um título"}</TitleHeader>
      <Image src={posts.imagem ? posts.imagem : "http://d2r9epyceweg5n.cloudfront.net/stores/779/284/products/quadro-personalizado-sua-imagem-aqui1-968094a464da7dae2f15795548104978-640-0.png"} />
      <Description>{posts.descricao ? posts.descricao : "Insira uma descrição"}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
