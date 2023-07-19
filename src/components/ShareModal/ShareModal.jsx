import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";

const ProfileModal = ({ modalOpened, setModalOpened }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="ProfileModal">
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Authentication"
        size={'40%'}
      >
        {/* Modal content */}
    
      </Modal>
    </div>
  );
};

export default ProfileModal;
