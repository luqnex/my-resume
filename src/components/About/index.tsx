/* eslint-disable @next/next/no-img-element */

import {
  AboutCustom,
  Container,
  ContainerAbout,
  ContainerImage,
  Description,
  Title,
} from "./styles";

import MyPhoto from "../../../public/assets/myPhoto.png";

export const About = () => {
  return (
    <AboutCustom id="about">
      <Container>
        <ContainerAbout>
          <Title>Sobre mim</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a,
            euismod risus r.
          </Description>
        </ContainerAbout>
        <ContainerImage>
          <img src={MyPhoto.src} alt="Lucas Costa" className="image" />
        </ContainerImage>
      </Container>
    </AboutCustom>
  );
};
