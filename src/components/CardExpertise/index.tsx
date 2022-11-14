/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from "next/image";

import { CardCustom, Description, Title } from "./styles";

type CardExpertiseProps = {
  url: string;
  title: string;
  description: string;
  image: StaticImageData;
};

export const CardExpertise = ({
  url,
  image,
  title,
  description,
}: CardExpertiseProps) => {
  return (
    <CardCustom href={url} target="_blank">
      <img src={image.src} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardCustom>
  );
};
