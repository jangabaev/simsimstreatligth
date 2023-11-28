import React from 'react'
import Streats from './streats/Streats'
import "./home.scss"
import HomeItem from './homeItem/HomeItem'
import { IGetHomeArray } from '../../../types/data'
import { useParams } from 'react-router-dom'
import InfoHome from './infoHome/InfoHome'
interface IHome{
  data: IGetHomeArray 
}
const HomeCompanet:React.FC<IHome> = ({data}) => {
  const {imei}=useParams()
  return (
    <section className="home">
      <div className="home__left">
        <Streats dataStreat={data}/>
      </div>
      <div className="home__rigth">
        {
          imei? <HomeItem imei={imei}/>:<InfoHome/>
        }
       
      </div>
    </section>
  )
}

export default HomeCompanet