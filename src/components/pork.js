import React, { Component } from 'react'


export default class Pork extends Component {

    state = {
        hide: true
    }

    nameToImg = () => {
        let name = this.props.hog.name.toLowerCase()
        let img = name.split(" ").join("_")
        
        return img
    }

    showHandler = () => {
        let prevState = this.state.hide
        
        this.setState({
            hide: !prevState
        })
    }

    render() {
        return (
            
            <div className="card" onClick= {() => {this.showHandler()}}>
                <div className = "image">
                    <img src={require(`../hog-imgs/${this.nameToImg()}.jpg`)} />
                </div>
                <div className="content">
                    <div className="header">
                        {this.props.hog.name}
                    </div>
                    <div className="meta">
                        specialty: {this.props.hog.specialty}
                    </div>
                    <div className="description" >

                        {this.state.hide ? null

                        :   
                            <span>
                                greased: {String(this.props.hog.greased)}
                                <br/>
                                weight: {this.props.hog.weight}
                                <br/>
                                highest medal achieved: {this.props.hog['highest medal achieved']}
                            </span>
                        }

                    </div>
                </div>   
            </div>
            
        )
    }
}