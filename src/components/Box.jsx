import React from "react"
import '../box.css'
import icon from '../assets/images/itc.png'
const Box = ({stock}) => {
    return(
        <div className="stocks">

                <div className="stocks-container">
                    <div className="img-container">
                        <img src={icon} alt="icon"></img>
                    </div>
                    <div className="text-container">
                        <h1>ITC Limited</h1>
                        High: 200.00<br></br>
                        Low: 150.00
                    </div>

                </div>

                <div className="stocks-container">
                    <div className="img-container">
                        <img src={icon} alt="icon"></img>
                    </div>
                    <div className="text-container">
                        <h1>ITC Limited</h1>
                        High: 200.00<br></br>
                        Low: 150.00
                    </div>

                </div>

             

                <div className="stocks-container">
                    <div className="img-container">
                        <img src={icon} alt="icon"></img>
                    </div>
                    <div className="text-container">
                        <h1>ITC Limited</h1>
                        High: 200.00<br></br>
                        Low: 150.00
                    </div>

                </div>

        
        
    </div>
     

    )
};
export default Box;