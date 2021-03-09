import React from 'react';
import App from './App';


class VideoLibrary extends React.Component{

    render(){
        
        return (
            
            <p>{this.props.video.link}</p>
        )
    }
}

export default VideoLibrary; 


