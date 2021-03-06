import { Box, Divider } from "@chakra-ui/layout";
import { SidebarMenu } from "./SidebarMenu";
import { Network } from "@meta/components";
import { useAdaptivityContext } from "@meta/hooks";

export const Sidebar = () => {
  const isSmallScreen = useAdaptivityContext();
  return (
    <Box width="100%" height="100%" paddingX="5px" fontSize="1.3rem">
      <Box mt="100px" py="20px" height="100%">
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
};
