import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkIthem = ({ href, path, children }) => {
  const active = path === href;
  const iniciativeColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : iniciativeColor}
        borderRadius="md"
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f4ede4', '#202023')}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={ 1 }
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        alignItems="center"
        justifyItems="space-between"
      >
        <Flex alignItems="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkIthem href="/works" path={path}>
            Obras
          </LinkIthem>
          <LinkIthem href="/stack" path={path}>
            Stack
          </LinkIthem>
        </Stack>
        <Box flex={ 1 } align="right">
        <ThemeToggleButton />
          <Box ml={ 2 } display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Sobre Mi</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Obras</MenuItem>
                </NextLink>
                <NextLink href="/stack" passHref>
                  <MenuItem as={Link}>Stack</MenuItem>
                </NextLink>
                ``
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
