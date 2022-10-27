/* eslint-disable @next/next/no-img-element */
import { FiArrowUpRight } from "react-icons/fi";

import Image from "../../../public/assets/Image.png";

import {
  CardCustom,
  ContainerDescription,
  Description,
  ImageCustom,
  Link,
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
        <Link href={link}>
          Ver no Github <FiArrowUpRight size={24} />
        </Link>
      </ContainerDescription>
    </CardCustom>
  );
};
