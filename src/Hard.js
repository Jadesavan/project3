import React, { Component } from "react";
import Title from "./Title";

class Hard extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:75,
            text:this.text
        }
        
    }

    onTrigger=()=>{
        this.props.parentCallback(this.state.wordcount)
        this.props.parentCallback2(this.state.text)
    }

    componentDidMount(){
        this.onTrigger()
    }
    header="Level 3"
    text="Jade graduate from Macomb Community College May 8th, 2021. She is receiving her Website Programming Level 2 Skill Specific Certificate. Jade is looking forward to start working within her field. She has been in college since August 2016 and she can’t wait to be done. There was some trials and errors while being in school but she managed to do it and she really appreciate her professors who helped along the way, especially Professor Wanner."

    render(){
        return(
            <div>
                <Title content={this.header} />
                <p className="testCompare">{this.text}</p>
                
            </div>
        );
    }
}

export default Hard;