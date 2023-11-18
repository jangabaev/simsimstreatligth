import { FC } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import "./map.css";

const Map1: FC = () => {
  const defaultState = {
    center: [42.44387, 59.627362],
    zoom: 16,
  };
  return (
    <div className="map__flex">
      <div className="map__rigth">
        <YMaps>
          <Map defaultState={defaultState}>
            <Placemark geometry={[42.44387, 59.627362]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default Map1;
