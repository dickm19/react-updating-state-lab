// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }
  }

  changeSetting = () => {
      
      this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
          }
      })
  }

  changeBiterate = () => {

    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
          }
    })
  }
  


  render(){
      return(
          <div>
              <button className="bitrate" onClick={this.changeBiterate}>Change Biterate</button>
              <button className="resolution" onClick={this.changeSetting}>Change Resolution</button>
        </div>
          
      )
  }

}

export default YouTubeDebugger;