import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { AiOutlineSetting } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { Network } from "./Network";

const navMenu = [
  {
    name: "Earn",
    icon: FaCoins,
    route: "/earn",
  },
  {
    name: "Create",
    icon: BiNetworkChart,
    route: "/create",
  },
  {
    name: "Your Feed",
    icon: FiBarChart2,
    route: "/feed",
  },
  {
    name: "Settings",
    icon: AiOutlineSetting,
    route: "/settings",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

export const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      mt="100px"
      bg="bg1"
      paddingX="5px"
      fontSize="1.3rem"
    >
      <Box paddingBottom="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} marginRight="20px" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="text1" mt="20px" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          {/*          <List spacing={2}>
            {playlists.map((playlist, idx) => (
              <ListItem paddingX="20px" key={`${playlist}--${idx}`}>
                <LinkBox>
                  <NextLink href="https://meta.xyz" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List> */}
          <Network />
        </Box>
      </Box>
    </Box>
  );
};
