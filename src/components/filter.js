import React, { Component } from 'react'

export default class Filter extends Component {

    render(){
        return (
            <div className= "ui form">
                <h3>Filter the swine</h3>
                <div className= "field">
                    <select 
                    name="type" 
                    id="type"
                    onChange={(e) => {this.props.changeFilterParams(e.target.value)}}
                    >
                        <option value="all">All</option>
                        <option value="greased">filter the greased</option>
                        <option value="sort by weight">sort by weight</option>
                        <option value="sort by name">sort by name</option>
                    </select>
                </div>
                <div className="field">
                    <button 
                    className="ui secondary button"
                    onClick= {() => {this.props.filterHogs()}}
                    >enter</button>
                </div>

            </div>
        )
    }
}