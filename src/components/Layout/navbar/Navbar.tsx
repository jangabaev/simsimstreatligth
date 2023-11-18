import React from 'react'
import Img from "../../../assets/simsimlogo/logo.png"
import "./navbar.scss"
const Navbar:React.FC = () => {
    const data={
        name:"Fayzullaev Alisher",
        type:"Admin",
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  return (
    <header>
        <div className="navbar">
            <div className="navbar__left">
                <img src={Img} alt="" />
                <h2>SimSim Streat Late</h2>
            </div>
            <div className="navbar__rigth">
                <div className="navbar__rigth__user">
                    <div className="navbar__rigth__user__img">
                        <img src={`${data.img}`} alt="" />
                    </div>
                    <div className="navbar__rigth__user__info">
                        <h3>{data.name}</h3>
                        <p>{data.type}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}


export default Navbar