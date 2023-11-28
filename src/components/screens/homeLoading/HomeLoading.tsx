import React from "react";
import Input from "@mui/joy/Input";
import AddIcon from "@mui/icons-material/Add";
import {Skeleton} from 'antd'

import "./homeLoading.scss"
const HomeLoading: React.FC = () => {
  return (
    <section className="home">
      <div className="home__left">
        <section>
          <div className="streats">
            <div className="streat__top">
              <div className="strate__input">
                <Input placeholder="kosheni izlew" />
              </div>
            </div>
            <div className="streats__element">
              <ul>
                <li>
                <Skeleton.Input  />
                </li>
                <li>
                <Skeleton.Input  />
                </li>
              </ul>
            </div>
            <div className="streats__botton">
              <div className="streats__botton__flex">
                <button>
                  <AddIcon />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="homeitem">
        <div className="homeitem__loading">
          <h1><Skeleton/></h1>
        </div>
        
      </div>
    </section>
  );
};

export default HomeLoading;
