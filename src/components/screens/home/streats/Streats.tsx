import React from "react";
import { NavLink,useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SearchInput from "./SearchInput/SearchInput";
import DeleteIcon from "@mui/icons-material/Delete";
import ModalStreat from "./Modal/Modal";
import { IGetHomeArray } from "../../../../types/data";
import { useDeleteStreatMutation } from "../../../../store/userRTK/userRTK";
import { LoadingOutlined } from "@ant-design/icons";
import "./streats.scss";


interface IHome {
  dataStreat: IGetHomeArray;
}

const Streats: React.FC<IHome> = ({ dataStreat }) => {
  const [modal, setModal] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState("");
  const {imei}=useParams()

  const [deleteStreatAsync, { isLoading }] = useDeleteStreatMutation();

  const deleteStreat = (imie: string) => {
    deleteStreatAsync({ imie });
    setDeleteId(imie);
  };

  return (
    <>
      <div className="streats">
        <div className="streat__top">
          <div className="strate__input">
            <SearchInput/>
          </div>
        </div>
        <div className="streats__element">
          <ul>
            {dataStreat?.map((el, prop) => {
              return (
                <li key={el.id} className={imei?el.imei===imei?"active":"":""}>
                  <NavLink to={`/admin/${el.name}/${el.imei}`} key={el.id}>
                    <span>{prop + 1}</span> {el.name}
                  </NavLink>

                  <button
                    className="streat__button"
                    onClick={() => deleteStreat(el.imei)}
                  >
                    {isLoading && deleteId === el.imei ? (
                      <LoadingOutlined />
                    ) : (
                      <DeleteIcon />
                    )} 
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
