import React from "react";

const API = 'AIzaSyCj09TO3Fh50Kh1_-SlnPbhyLF9i1ceAQw';
    const channelID = 'UCxh88oatqUSvx59M6O48pTA';
    const result = '1';
    const finalUrl =`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class VideoPlayer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };

        

       // this.clicked = this.clicked.bind(this);
        this.handleVideo = this.clicked.bind(this, 'LoginInput');
       // this.clicked2 = this.clicked.bind(this);
       
    }

    clicked(){
        fetch(finalUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                    const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                    this.setState({resultyt});
                    console.log(this.state.resultyt);
               //console.log(responseJson);
            })

            .catch((error) => {
                console.error(error);
            })
    }

    render(){
        //console.log(finalUrl);
        return(
            <div>
                
                
                <div className="home-menu">
                 <input onKeyUp={this.handleVideo} ref="LoginInput" className="input" type="text" placeholder="Search">

                 </input>
           </div>
                <div className="video-player">
                 {
                      this.state.resultyt.map((link, i) => {
                
                        var frame = <div className="video-holder"><iframe key={i} src={link} height="400" width="600" frameBorder="0" allowFullScreen></iframe></div>
                      return frame
                    })
                  }

                  {this.frame}

                  </div>
            
                  
                  
           
         
            
            </div>
        );
    }
}

export default VideoPlayer; 



/*
function VideoPlayer({ items }) {

    
    return items.map(item => (
        <fragment>
            <div className="video-holder">
              
                <h1>{item.name}</h1>
                <h1>{item.link}</h1>
             
            </div>
        </fragment>
    ));
    
}*/

