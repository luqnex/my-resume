import Image, { StaticImageData } from "next/image";

import { CardCustom, Description, Title } from "./styles";

type CardExpertiseProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const CardExpertise = ({
  image,
  title,
  description,
}: CardExpertiseProps) => {
  return (
    <CardCustom>
      <Image src={image} alt={title} width={"70%"} height={"70%"} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardCustom>
  );
};
