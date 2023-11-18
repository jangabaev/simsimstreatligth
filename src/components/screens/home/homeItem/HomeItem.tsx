import React from "react";
import {
  useOneGetStreatQuery,
  usePutStreatMutation,
} from "../../../../store/userRTK/userRTK";
import ModalRecuring from "../../../recurring/Modal/Modal";
import Button from "@mui/joy/Button";
import Map1 from "../../../recurring/map/Map";
import EditIcon from "@mui/icons-material/Edit";
import "./homeitem.scss";

const HomeItem: React.FC<{ id: string }> = ({ id }) => {
  const [putStreat, putstate] = usePutStreatMutation();

  const { data } = useOneGetStreatQuery({ id: id });
  console.log(data);
  const [start, setStart] = React.useState({
    open: false,
    oclock: data?.is_on_time,
    text: "janiw waqti",
  });
  const [end, setEnd] = React.useState({
    open: false,
    oclock: data?.is_off_time,
    text: "oshiw waqiti",
  });

  const hendleChange = (value: boolean) => {
    if (data) {
      putStreat({
        data: {
          is_off_time: data.is_off_time,
          is_on_time: data.is_on_time,
          location: data.location,
          name: data.name,
          state: value,
        },
        id,
      });
    }
  };

  React.useEffect(() => {
    if (data&&(start.oclock||end.oclock)) {
      putStreat({
        data: {
          is_off_time: end.oclock?end.oclock:data.is_off_time,
          is_on_time: start.oclock?start.oclock:data.is_on_time,
          location: data.location,
          name: data.name,
          state: putstate.data?putstate.data.state:data.state,
        },
        id,
      });
    }
  },[end.oclock&&end.open||start.oclock&&start.open]);

  React.useEffect(() => {}, [id]);
  return (
    <section>
      <div className="homeitem">
        <div className="homeitem__streat">
          <h1>{data?.name}</h1>
        </div>
        <div className="homeitem__turd__data__element">
          <p>Janiw Waqiti : </p>
          <div>
            <h3>{start.oclock?start.oclock:data?.is_on_time}</h3>
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
              <h3>{end.oclock?end.oclock:data?.is_off_time}</h3>
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
