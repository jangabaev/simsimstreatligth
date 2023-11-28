import { FC, useState, useEffect } from "react";
import {
  useOneGetStreatQuery,
  usePutStreatMutation,
} from "../../../../store/userRTK/userRTK";
import ModalRecuring from "../../../recurring/Modal/Modal";
import Button from "@mui/joy/Button";
import Map1 from "../../../recurring/map/Map";
import EditIcon from "@mui/icons-material/Edit";
import "./homeitem.scss";

const HomeItem: FC<{ imei: string }> = ({ imei }) => {
  
  const [putStreat, putstate] = usePutStreatMutation();

  const { data } = useOneGetStreatQuery({ id: imei });

  const [start, setStart] = useState({
    open: false,
    oclock: data?.is_on_time,
    text: "janiw waqti",
  });
  const [end, setEnd] = useState({
    open: false,
    oclock: data?.is_off_time,
    text: "oshiw waqiti",
  });

  const hendleChange = (value: boolean) => {
    if (data) {
      putStreat({
        data: { ...data, state: value },
        imei,
      });
    }
  };

  useEffect(() => {
    if (data && (start.oclock || end.oclock)) {
      putStreat({
        data: {
          ...data,
          is_off_time: end.oclock ? end.oclock : data.is_off_time,
          is_on_time: start.oclock ? start.oclock : data.is_on_time
        },
        imei,
      });
    }
  }, [(end.oclock && !end.open),(start.oclock && start.open)]);

  return (
    <section>
      <div className="homeitem">
        <div className="homeitem__streat">
          <h1>{data?.name}</h1>
        </div>
        <div className="homeitem__turd__data__element">
          <p>Janiw Waqiti : </p>
          <div>
            <h3>{start.oclock ? start.oclock : data?.is_on_time}</h3>
          </div>
          <Button onClick={() => setStart((prev) => ({ ...prev, open: true }))}>
            <EditIcon />
          </Button>
        </div>
        <div className="homeitem__turn">
          <div
            className={
              putstate.data
                ? putstate.data.state
                  ? "checkbox active"
                  : "checkbox"
                : data?.state
                ? "checkbox active"
                : "checkbox"
            }
            onClick={() =>
              hendleChange(
                putstate.data
                  ? putstate.data.state
                    ? false
                    : true
                  : data?.state
                  ? false
                  : true
              )
            }
          />
        </div>

        <div className="homeitem__turd__data">
          <div className="homeitem__turd__data__element">
            <p>Oshiw waqiti :</p>
            <div>
              <h3>{end.oclock ? end.oclock : data?.is_off_time}</h3>
            </div>
            <Button onClick={() => setEnd((prev) => ({ ...prev, open: true }))}>
              <EditIcon />
            </Button>
          </div>
        </div>
        <div className="homeitem__map">
          <Map1 />
        </div>
      </div>
      <ModalRecuring data={start} setModal={setStart} />
      <ModalRecuring data={end} setModal={setEnd} />
    </section>
  );
};

export default HomeItem;
