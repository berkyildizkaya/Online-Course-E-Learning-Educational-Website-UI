// Brands.js

import { Flex } from "@chakra-ui/react";
import BrandCards from "./BrandCards";

const Brands = () => {
    const brandLogos = [
        "Zapier.png",
        "Zoom.png",
        "Spotify.png",
        "Amazon3.png",
        "Adobe.png",
        "Notion.png",
        "Netflix.png",
      ];

  return (
    <Flex px={"0"} py={"5"} justify={"center"} alignItems={"center"} mt={20} wrap={"wrap"}  gap={2}>
      {brandLogos.map((logoUrl, index) => (
        <BrandCards key={index} logoUrl={logoUrl} />
      ))}
    </Flex>
  );
};

export default Brands;
 