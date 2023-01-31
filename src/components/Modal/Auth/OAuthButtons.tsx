import { Button, Flex, Image } from "@chakra-ui/react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button>Some other provider</Button>
    </Flex>
  );
};

export default OAuthButtons;
