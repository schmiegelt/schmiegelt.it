import React from "react";
import styled from "styled-components";
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Button from "@mui/material/Button"
import { ContactForm } from "./ContactForm";

const FooterWrapper = styled.footer`
  
  flex-shrink: 0;
  background: black;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;

`;
export const Footer = () => {

    const [state, setState] = React.useState({
        bottom: false,
      })
    
      const [open, setOpen] = React.useState(false)
      const handleClickOpen = () => {
        setOpen(true)
      }
      const handleClose = () => {
        setOpen(false)
      }
    
      const toggleDrawer = (anchor, open) => event => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return
        }
        setState({ ...state, [anchor]: open })
      }
  
  return (


	<FooterWrapper>
        
  	   <Button color="secondary" onClick={toggleDrawer("bottom", true)}>
            Contact Form
            </Button>
          <ContactForm open={state["bottom"]} onClose={toggleDrawer("bottom", false)} />
	</FooterWrapper>
  );
};