import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Easy from "./Easy";
import Medium from "./Medium";
import Hard from "./Hard";
import "./index.css";





class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            wordcount:null,
            text:null,
            intervals:null,
        }
        this.handleCallback=this.handleCallback.bind(this);
        this.handleCallback2=this.handleCallback2.bind(this);
        this.callback=this.callback.bind(this);
        this.callback2=this.callback2.bind(this);
    }

    handleCallback=(childData)=>{
        this.setState({wordcount:childData})
        
    }

    handleCallback2=(childData)=>{
        this.setState({text:childData})
    }



    
    componentDidMount(){
        setTimeout(this.callback,0)
    }
    callback2(){
        setTimeout(this.callback,0)
    }
    callback=()=>{
        this.props.parentCall(this.state.text)
        this.props.parentCall2(this.state.wordcount)
        this.props.parentCall3(this.state.close)
    }



    render(){
        
        return(
            <HashRouter>
                <div>
                    <h1>Typing Tutor: WPM speed test</h1>
                    <ul className="header">
                        <li><NavLink exact to="/" onClick={this.callback2}>Easy</NavLink></li>
                        <li><NavLink to="/medium" onClick={this.callback2}>Medium</NavLink></li>
                        <li><NavLink to="/hard" onClick={this.callback2}>Hard</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/"><Easy parentCallback={this.handleCallback} parentCallback2={this.handleCallback2}/></Route>
                        <Route path="/medium"><Medium parentCallback={this.handleCallback} parentCallback2={this.handleCallback2}/></Route>
                        <Route path="/hard"><Hard parentCallback={this.handleCallback} parentCallback2={this.handleCallback2}/></Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;