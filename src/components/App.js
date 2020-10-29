import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogBrowser from "./HogBrowser"
import Filter from "./filter"

class App extends Component {

  state = {
    filter: "all",
    hogsList: hogs
  }

   compareName = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;

    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  compareWeight = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const weightA = a.weight;
    const weightB = b.weight;
  
    let comparison = 0;

    if (weightA > weightB) {
      comparison = 1;
    } else if (weightA < weightB) {
      comparison = -1;
    }
    return comparison;
  }
  

  changeFilterParams = (filterParam) => {
    console.log(filterParam)
    this.setState({
      filter: filterParam
    })
  }
  
  filterHogs = () => {
    let param = this.state.filter
    let list = []
    
    console.log(param + " in filter")
    if (param == "all") {
      this.setState({
        hogsList: hogs
      })
    }
    else if (param == "greased"){
      list = hogs.filter(hog => hog.greased == true)
      
      this.setState({
        hogsList: list
      })
    }
    else if (param == "sort by weight") {

      list = hogs
      let sortedList = list.sort(this.compareWeight) 
      this.setState ({
        hogsList: sortedList
      })
    }
    else if (param == "sort by name") {

      list = hogs
      let sortedList = list.sort(this.compareName)

      this.setState ({
        hogsList: sortedList
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <Filter changeFilterParams={this.changeFilterParams} filterHogs= {this.filterHogs} />
        <HogBrowser hogs={this.state.hogsList} />
        
      </div>
    );
  }
}

export default App;
