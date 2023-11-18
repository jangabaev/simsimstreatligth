import React from "react";
import Modal from "@mui/joy/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/joy/Input";
import { usePostStreatMutation } from "../../../../../store/userRTK/userRTK";
import "./modal.scss";
interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
const ModalStreat: React.FC<IModal> = ({ open, setModal }) => {
  const [postStreat,{data}]=usePostStreatMutation()
  const [streat, setStreat] = React.useState({
    name: "",
      location: "",
      state: true,
      is_on_time: "",
      is_off_time: ""
  });
  const addstreat = () => {
    postStreat(streat)

  };
  React.useEffect(()=>{
    if(data?.name){
      setModal(false)
    }
  },[data])
  return (
    <>
      <Modal
        open={open}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="modal__oclock">
            <label>
              <span>janiw waqiti</span>
              <Input type="time" onChange={(e)=>setStreat((el)=>({...el,is_on_time:e.target.value}))}/>
            </label>
            <label>
              <span>oshiw waqiti</span>
              <Input type="time"  onChange={(e)=>setStreat((el)=>({...el,is_off_time:e.target.value}))}/>
            </label>
          </div>
          <label>
            qalaniz ati
          <Input   onChange={(e)=>setStreat((el)=>({...el,name:e.target.value}))} placeholder="koshinizdi kiritin'"/>
          </label>
          <div className="modal__button">
          <Button onClick={addstreat} variant="contained" color="secondary">
            qosiw
          </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalStreat;
