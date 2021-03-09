import React from "react";
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";

class SideMenu extends React.Component{

    render (){

        return(

            <div className="side-box">
                <div className="side-list">
                    <ul>
                        <li>Favorites</li>
                        <li>Saved</li>
                        <li>History</li>
                        <li>Watch later</li>
                        
                    </ul>
                </div>
            </div>
        )
    }

}

export default SideMenu;