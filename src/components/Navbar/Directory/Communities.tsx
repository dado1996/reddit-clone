import { communityState, CommunitySnippet } from "@/atoms/communitiesAtom";
import CreateCommunityModal from "@/components/Modal/Auth/CreateCommunityModal";
import { Flex, MenuItem, Icon, MenuDivider, MenuGroup } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaReddit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import useCommunityData from "@/hooks/useCommunityData";

const Communities: React.FC = () => {
  const { communityStateValue } = useCommunityData();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const mySnippets = useRecoilValue(communityState).mySnippets;

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuGroup title="YOUR COMMUNITIES" color="gray.500">
        <MenuItem
          width="100%"
          fontSize="10pt"
          _hover={{ bg: "gray.100" }}
          onClick={() => setOpen(true)}
        >
          <Flex align="center">
            <Icon as={GrAdd} fontSize={20} mr={2} />
            Create Community
          </Flex>
        </MenuItem>
        {mySnippets.map((c) => (
          <MenuItem
            key={c.communityId}
            width="100%"
            fontSize="10pt"
            _hover={{ bg: "gray.100" }}
            onClick={() => router.push(`/r/${c.communityId}`)}
          >
            <Link href={`/r/${c.communityId}`}>
              <Flex align="center">
                <Icon
                  as={FaReddit}
                  boxSize="2rem"
                  borderRadius="full"
                  mr="12px"
                />
                {c.communityId}
              </Flex>
            </Link>
          </MenuItem>
        ))}
      </MenuGroup>
      <MenuDivider />
    </>
  );
};

export default Communities;
