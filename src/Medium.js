import React, { Component } from "react";
import Title from "./Title";

class Medium extends Component{
    constructor(props){
        super(props);

        this.state={
            wordcount:58,
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
    text="Bella miss going to the movies, the last time she went to the movies was January 29th, 2020. After that everything change. Now she is able to watch her favorite shows on Netflix and Disney plus. She love watching Kim Possible and Gravity Falls. Currently, she is watching Stranger Things on Netflix and waiting for the new season."
    header="Level 2"
    render(){
   
        return(
            <div>
                <Title content={this.header} />
                <p className="testCompare">{this.text}</p>
                
            </div>
        );
    }
}

export default Medium;