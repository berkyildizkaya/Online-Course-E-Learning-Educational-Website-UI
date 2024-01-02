import { Box, Card, CardBody, Image } from "@chakra-ui/react";

const BrandCards = ({ logoUrl }) => {
    return (
        <>
            <Card align={"center"} size={"lg"}>
                <CardBody>
                    <Box >
                        <Image src={`../assets/images/brands/${logoUrl}`} alt={"Brand Logo"} />
                    </Box>
                </CardBody>
            </Card>
        </>

    );
};

export default BrandCards;