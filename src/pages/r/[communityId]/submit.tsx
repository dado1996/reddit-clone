import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

const Submit: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <PageContent>
      <>
        <Box p="14px 0" borderBottom="1px solid" borderColor="white"></Box>
        {user ? (
          <NewPostForm user={user} />
        ) : (
          <Flex justify="center" align="center">
            <Spinner size="xl" />
          </Flex>
        )}
      </>
      <>About</>
    </PageContent>
  );
};

export default Submit;
