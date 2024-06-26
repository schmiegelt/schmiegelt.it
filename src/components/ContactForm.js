import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

const ContactFormWrapper = styled.footer`
  
  flex-shrink: 0;
  background: dark-grey;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;

`;
export const ContactForm = (props) => {
  
  return (
	<Drawer
      anchor={"bottom"}
      open={props.open}
      onClose={props.onClose}
      
      PaperProps={{ elevation: 0 }}
      sx={{
        backdropFilter: "blur(4px)",
      }}
    >
      <Container maxWidth="sm">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >
           <input type="hidden" name="access_key" value="5a5bac4b-4f36-4884-b08a-7a7164c05789"></input>
          <Box
            sx={{
              my: "2rem",
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: "1.5rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Reach out anytime! 👋
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "360px",
                  lineHeight: "1.43",
                }}
              >
                Have any questions, feedback or want to say hi? Fill the form,
                or{" "}
                <Link href="mailto:philip@schmiegelt.it" color={"inherit"}>
                  email me
                </Link>{" "}
                whenever convenient.
              </Typography>
            </Box>
            <TextField
              id="outlined-name"
              label="Name"
              variant="outlined"
              name="name"
              type={"text"}
            />
            <TextField
              id="outlined-email"
              label="Email"
              variant="outlined"
              name="email"
              type={"email"}
              required
            />
            <TextField
              id="outlined-message"
              label="Message"
              variant="outlined"
              placeholder="Something nice 😅"
              name="message"
              type={"text"}
              required
              multiline
              rows={3}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disableElevation
              type="submit"
              sx={{
                backgroundColor: "text.primary",
                color: "background.alt",
                textTransform: "none",
                fontWeight: 400,
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </Drawer>
  );
};