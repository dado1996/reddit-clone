import { Community, communityState } from "@/atoms/communitiesAtom";
import About from "@/components/Community/About";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth, firestore } from "@/firebase/clientApp";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import safeJsonStringify from "safe-json-stringify";

type SubmitProps = {
  communityData: Community;
};

const Submit: React.FC<SubmitProps> = ({ communityData }) => {
  const [user] = useAuthState(auth);
  const communityStateValue = useRecoilValue(communityState);
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
      <About communityData={communityData} />
    </PageContent>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Get community data
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error: any) {
    console.error("getServerSideProps error", error);
    return {
      props: {
        communityData: {},
      },
    };
  }
}

export default Submit;
