import React from 'react'
import {
  Menu,
  MenuButton,
  IconButton,
  Box,
  Show,
  Drawer,
  DrawerContent,
  Flex,
  useDisclosure} from '@chakra-ui/react';
import { HamburgerIcon} from "@chakra-ui/icons";
import { } from "@chakra-ui/react";

import "../Header/Header.css";
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

      const links = [
        { title: "Inicio", to: "/" },
        { title: "Acerca de", to: "/acercade" },
        { title: "Registro", to: "/registro" },
      ];

  return (
    <div>
      <Show breakpoint="(min-width: 768px)">
        <Flex className="nav"  h="50px">
          <Box w="250px" color="tomato">
            <p>LOGO</p>
          </Box>
          <Box flex="1">
            <div className="menu">
              {links.map((link) => (
                <a key={link.to} href={link.to}>
                  {link.title}
                </a>
              ))}
            </div>
          </Box>
        </Flex>
      </Show>
      <Show breakpoint="(max-width: 767px)">
        <Box>
          <Menu>
            <MenuButton
              className="btnham"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              ref={btnRef}
              onClick={onOpen}
            />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerContent>
                <MenuButton
                  className="btnham"
                  id="btnclose"
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  ref={btnRef}
                  onClick={onClose}
                />
                <div className="menuHam">
                  {links.map((link) => (
                    <a key={link.to} href={link.to}>
                      {link.title}
                    </a>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </Menu>
        </Box>
      </Show>
    </div>
  );
}

export default Header