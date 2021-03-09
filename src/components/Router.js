import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import StorePicker from "./StorePicker";
import App from "./App";
//import NotFound from "./NotFound";
//import Home from "./Home";
//import SideMenu from "./SideMenu";
//import VideoPlayer from "./VideoPlayer";

const Router = () => (
    <BrowserRouter>
        <switch>
        <Route component={App} />
           
            
           
            

        </switch>
    </BrowserRouter>
);

export default Router;

// <Route exact path="/" component={StorePicker} />    

//<Route component={NotFound} />