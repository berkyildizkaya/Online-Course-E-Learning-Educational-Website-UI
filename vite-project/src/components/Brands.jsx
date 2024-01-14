import { Flex } from "@chakra-ui/react";
import BrandCards from "./BrandCards";

const Brands = () => {
  const brandLogos = [
    { id: 1, imageUrl: "Zapier.png" },
    { id: 2, imageUrl: "Zoom.png" },
    { id: 3, imageUrl: "Spotify.png" },
    { id: 4, imageUrl: "Amazon3.png" },
    { id: 5, imageUrl: "Adobe.png" },
    { id: 6, imageUrl: "Notion.png" },
    { id: 7, imageUrl: "Netflix.png" },
  ];

  return (

    <>
      <Flex px={"0"} my={"5"} justify={"center"} alignItems={"center"} mb={"10"} wrap={"wrap"} gap={2}>
        {brandLogos.map((brand) => (
          <BrandCards key={brand.id} logoUrl={brand.imageUrl} />
        ))}
      </Flex>
      

    </>
  );
};

export default Brands;
