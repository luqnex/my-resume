/* eslint-disable @next/next/no-img-element */
import Image from "../../../public/assets/Image.png";

import {
  CardCustom,
  ContainerDescription,
  Description,
  ImageCustom,
  Title,
} from "./styles";

type CardProjectProps = {
  link: string;
  title: string;
  description: string;
};

export const CardProject = ({ link, title, description }: CardProjectProps) => {
  return (
    <CardCustom>
      <ImageCustom src={Image.src} />
      <ContainerDescription>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <a href={link}>Ver no Github</a>
      </ContainerDescription>
    </CardCustom>
  );
};
