import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 0">
      <Flex width="95%" justify="center" maxWidth="860px">
        {/* Left side */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        {/* Right side */}
        <Flex display={{ base: "none", md: "flex" }} flexGrow={1}>
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
