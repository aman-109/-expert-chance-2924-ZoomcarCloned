import "../../Styles/Footer/footer.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Img,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footerBox">
        <div className="offerBox">
            <Text as={"h3"} mb={"0.5rem"} >OFFERS</Text>
            <div style={{height:"180px"}}>
                <Img src="https://zoomcar-assets.zoomcar.com/photos/original/67aa017f464b45e52f7bc9a206245e5f15f5a316.jpg" height={"100%"}/>
            </div>
        </div>

        {/* about accordion */}
        <Accordion defaultIndex={[0]} bgColor={"#f7f9fb"} allowMultiple>
          <AccordionItem>
            <Box >
              <AccordionButton justifyContent={"center"}>
                <Box fontSize={"sm"} textAlign="center">
                  About Us
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel fontSize={"xs"}  textAlign="center">
              <Link to="#">Zoomcar Team</Link>
            </AccordionPanel>
            <AccordionPanel fontSize={"xs"}  textAlign="center">
              <Link to="#">Zoomcar Subscription</Link>
            </AccordionPanel>
            <AccordionPanel fontSize={"xs"}  textAlign="center">
              <Link to="#">Zoomcar Blog</Link>
            </AccordionPanel>
            <AccordionPanel fontSize={"xs"}  textAlign="center">
              <Link to="#">Careers @ Zoomcar</Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

            {/* slogan and copyright */}
        <section className="footer_bottom">
          <div className="slogan"></div>
          <div className="copyright">
            © Copyright 2022 Zoomcar India Private Ltd. All rights reserved
          </div>
        </section>
      </div>
    </>
  );
}
