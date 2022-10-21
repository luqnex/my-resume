import LogoReact from "../../../public/assets/react.png";

import { CardExpertise } from "../CardExpertise";

import { Container, ContainerCard, ExpertiseCustom, Title } from "./styles";

export const Expertise = () => {
  return (
    <ExpertiseCustom>
      <Container>
        <Title>Experiencia</Title>

        <ContainerCard>
          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />

          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />

          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />

          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />
        </ContainerCard>
      </Container>
    </ExpertiseCustom>
  );
};
