import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Input from "@mui/joy/Input";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalStreat from "./Modal/Modal";
import { IGetHomeArray } from "../../../../types/data";
import { useDeleteStreatMutation } from "../../../../store/userRTK/userRTK";
import {LoadingOutlined} from "@ant-design/icons"
import "./streats.scss";

interface IHome {
  dataStreat: IGetHomeArray;
}

const Streats: React.FC<IHome> = ({ dataStreat }) => {
  const [modal, setModal] = React.useState(false);

  const [deleteStreatAsync, {isLoading}] = useDeleteStreatMutation();

  const [value, setValue] = React.useState("");
  console.log(value);
  const timer = useRef();

  const hendleChange = async (el: string) => {
    clearTimeout(timer.current);
    //@ts-ignore
    timer.current = setTimeout(() => {
      setValue(el);
    }, 500);
  };

  const deleteStreat = (id: number) => {
    deleteStreatAsync({ id: id });
  };

  return (
    <>
      <div className="streats">
        <div className="streat__top">
          <div className="strate__input">
            <Input
              placeholder="kosheni izlew"
              onChange={(el) => hendleChange(el.target.value)}
            />
          </div>
        </div>
        <div className="streats__element">
          <ul>
            {dataStreat?.map((el, prop) => {
              return (
                <li key={el.id}>
                  <NavLink to={`/admin/${el.name}/${el.id}`} key={el.id}>
                    <span>{prop + 1}</span> {el.name}
                  </NavLink>

                  <button
                    className="streat__button"
                    onClick={() => deleteStreat(el.id)}
                  >
                  {isLoading?<LoadingOutlined />:<DeleteIcon />}
                    
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="streats__botton">
          <div className="streats__botton__flex">
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
      <ModalStreat open={modal} setModal={setModal} />
    </>
  );
};

export default Streats;
