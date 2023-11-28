import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./modal.scss";
interface IModal {
  setModal: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      oclock: string | undefined;
      text: string;
    }>
  >;
  data: {
    open: boolean;
    oclock: string | undefined;
    text: string;
  };
}
const ModalRecuring: React.FC<IModal> = ({ data, setModal }) => {
  const [value, setValue] = useState("18:00");

  const modalClick = () => {
    setModal((prev) => ({ ...prev, open: !prev.open, oclock: value }));
  };
  const hendleChange = (el: string) => {
    setValue(el);
  };

  return (
    <>
      <Modal
        open={data.open}
        onClose={() => setModal((prev) => ({ ...prev, open: !prev.open }))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 150,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <p>{data.text}</p>
          <div className="modal__input">
            <input
              type="time"
              onChange={(el) => hendleChange(el.target.value)}
              placeholder="koshinizdi kiritin'"
            />
          </div>
          <div className="modal__button">
            <Button onClick={modalClick} variant="contained" color="secondary">
              saqlaw
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalRecuring;
