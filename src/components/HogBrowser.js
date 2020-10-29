import React, { Component } from "react";
import Pork from './pork'

class HogBrowser extends Component {
    state = {
        hogs: this.props.hogs
    }

    render() {
      return (
        <div className= "ui grid container cards" >
          {this.props.hogs.map(hog => <Pork key={hog.name} hog={hog} />)}
        </div>
      );
    }
  }
  
  export default HogBrowser;
  