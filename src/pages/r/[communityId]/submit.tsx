import { Community, communityState } from "@/atoms/communitiesAtom";
import About from "@/components/Community/About";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth, firestore } from "@/firebase/clientApp";
import useCommunityData from "@/hooks/useCommunityData";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import safeJsonStringify from "safe-json-stringify";

const Submit: React.FC = () => {
  const [user] = useAuthState(auth);
  // const communityStateValue = useRecoilValue(communityState);
  const { communityStateValue } = useCommunityData();

  return (
    <PageContent>
      <>
        <Head>
          <title>Submit to Reddit</title>
          <link ref="shortcut icon" href="/public/images/redditFace.svg" />
        </Head>
        <Box p="14px 0" borderBottom="1px solid" borderColor="white"></Box>
        {user ? (
          <NewPostForm user={user} />
        ) : (
          <Flex justify="center" align="center">
            <Spinner size="xl" />
          </Flex>
        )}
      </>
      {communityStateValue.currentCommunity && (
        <About communityData={communityStateValue.currentCommunity} />
      )}
    </PageContent>
  );
};

export default Submit;
