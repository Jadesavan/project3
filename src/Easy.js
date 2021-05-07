import React, { Component } from "react";
import Title from "./Title";

class Easy extends Component{
    constructor(props){
        super(props);
        

        this.state={
            wordcount:50,
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


    header="Level 1"
    text="Maddie went to the Asian mart to buy fresh produce, pack of ramen, boba tea, socks and ice cream. After she got her groceries she decided to go to Sephora and get Fenty beauty newest release. She went and bought the Bright Fix concealer and the Fenty Skin body butter."

    render(){
        return(
            <div>
                <Title content={this.header} />
                <p id="textCompare">{this.text}</p>
            </div>
        );
    }
}

export default Easy;