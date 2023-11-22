import React from "react";
import { Box,Flex} from "@chakra-ui/react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import "../Footer/Footer.css"

export default function Footer() {

  return (
    <Flex className="nav" h="50px">
      <Box flex="1">
        <div className="redes">
          <a href="https://www.facebook.com/" target="blank">
            <AiOutlineFacebook />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <AiOutlineYoutube />
          </a>
        </div>
      </Box>
    </Flex>
  );
}
