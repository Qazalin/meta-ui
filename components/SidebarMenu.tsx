import NextLink from "next/link";
import {
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { AiOutlineSetting } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { DependantProps } from "@meta/utils";

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
export const SidebarMenu = ({ isSmallScreen }: DependantProps) => {
  return (
    <List spacing={2}>
      {navMenu.map((menu) => {
        return (
          <ListItem paddingX="20px" key={menu.name}>
            <LinkBox>
              <NextLink href={menu.route} passHref>
                <LinkOverlay>
                  <ListIcon as={menu.icon} marginRight="20px" />
                  {isSmallScreen ? null : menu.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        );
      })}
    </List>
  );
};
