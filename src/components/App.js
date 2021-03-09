import React from "react";
import Home from "./Home";
import SideMenu from "./SideMenu";
import VideoPlayer from "./VideoPlayer";



/*
    const myItems =[{
    
    
        name: 'vlog',
        link: <iframe width="560" height="315" src="https://www.youtube.com/embed/_Hege-qbypg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }, {
        
        name: 'music',
        link: <iframe width="560" height="315" src="https://www.youtube.com/embed/_Hege-qbypg" 
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
    
    }, {
        
        name: 'sports',
        link: <iframe width="560" height="315" src="https://www.youtube.com/embed/_Hege-qbypg" 
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
    }];*/
/*tutorial https://www.youtube.com/watch?v=c6t3bW7kx6E  */
    
    

function App() {
    return (
        <fragment>
        <Home />
        <SideMenu />
       <VideoPlayer />
       </fragment>
    );
}
    /*
    function App() {
        return (
            <fragment>
            <Home />
            <SideMenu />
           <VideoPlayer items={myItems} />
           </fragment>
        );
    }*/

export default App;
//React.render(<App contacts={contacts} />, document.getElementById('app'));