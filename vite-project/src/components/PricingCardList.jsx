import { HStack, VStack, Text, IconButton } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";

const IconListItem = ({ icon, text }) => (
  <HStack align="start" >
    <IconButton size={"sm"} border={"1px"} borderColor={"#F1F1F3"} bg={icon== "Check" ? "#FFF4E5" : "whiteAlpha"} icon={icon == "Check" ? <FaCheck/> : <FaTimes/>}  ></IconButton>
    <Text>{text}</Text>
  </HStack>
);

const PricingCardList = ({ cardList }) => {
  
  return (
    <VStack spacing={4} align="start">

      {cardList.map((myCard, index) => (
        <IconListItem icon={myCard.icon} text={myCard.text} key={myCard.key} />
      ))}
    </VStack>
  );
};

export default PricingCardList;
