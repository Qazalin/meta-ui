import { Box, Divider } from "@chakra-ui/layout";
import { SidebarMenu } from "./SidebarMenu";
import { Network } from "@meta/components";
import { useWindowDimensions } from "@meta/hooks";
import { BREAKPOINTS } from "@meta/ui";
const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

export const Sidebar = () => {
  const isSmallScreen = useWindowDimensions(BREAKPOINTS.md);
  if (isSmallScreen !== null) {
    return (
      <Box
        width="100%"
        height="calc(100vh - 100px)"
        mt="100px"
        bg="bg1"
        paddingX="5px"
        fontSize="1.3rem"
      >
        <Box py="20px" height="100%">
          <Box marginBottom="20px">
            <SidebarMenu isSmallScreen={isSmallScreen} />
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
  }
  return;
  null;
};
