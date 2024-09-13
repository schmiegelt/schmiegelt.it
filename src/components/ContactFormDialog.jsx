import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Textarea,
  Link,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
//import {LockIcon} from './LockIcon.jsx';

export default function ContactFormDialog() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="text-slate-400" variant="light">
        Contact Form
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent className="text-slate-400 bg-slate-900">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contact Form</ModalHeader>
              <ModalBody>
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input
                    type="hidden"
                    name="access_key"
                    value="5a5bac4b-4f36-4884-b08a-7a7164c05789"
                  ></input>
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="Enter your message here"
                    variant="bordered"
                    className="mt-5"
                  />
                  <Button color="primary" type="submit" variant="light" className="text-slate-400 mt-5">
                    Submit
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
