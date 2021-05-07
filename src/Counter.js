import React, { Component } from "react";
import Main from "./Main";


class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            textarea: "",
            intervals:null,
            text:"",
            wordcount:null,
            displaytext:"Text don't match",
            fired:false,
            wordpermin:null,
            close:false,
            textarea2:"",
            textLength:"",
        }

        this.startCounter=this.startCounter.bind(this);
        this.timerTick=this.timerTick.bind(this);
        this.reset=this.reset.bind(this);
        this.cur=this.cur.bind(this);
    }

    
    startCounter(e){
        if (this.state.fired===false){
                this.intervals=setInterval(this.timerTick, 100)
            this.setState({fired:true});
        }
        
        this.setState({
            textarea:this._input.value,
            textarea2:e.target.value,
        });

        setTimeout(this.cur,1)
    }

    cur(){
        if (this.state.textarea2===this.state.text){

            this.calculateWPM();
            this.setState({
                displaytext:"The text is correct!",
                fired:false,
                close:true
            })

            clearInterval(this.intervals);
            
        } else if (this.state.textarea2!==this.state.text){

            this.setState({
                displaytext:"Text don't match"
            })
        }
    }

    componentDidUpdate(){
        if (this.props.countValue===0){
            this.props.decreaseCount();
        }
    }

    
    calculateWPM(){
        this.wpm=null;
        this.wpm=this.props.countValue/60;
        this.wpm=this.state.wordcount/this.wpm;
        this.wpm=Math.round(this.wpm*100)/100;
        this.setState({
            wordpermin:this.wpm
        });
    }



    timerTick(){
        this.props.increaseCount();
    }

    handleCall=(childData)=>{
        this.setState({
            text:childData,
            textarea: "",
            intervals:0,
            displaytext:"Text don't match",
            fired:false,
            wordpermin:null
        })
        clearInterval(this.intervals);
        return this.props.decreaseCount();
    }

    handleCall2=(childData)=>{
        this.setState({wordcount:childData})
    }
    handleCall3=(childData)=>{
        this.setState({close:childData})
    }


    reset(e){
        e.preventDefault();
        this.props.decreaseCount();
        clearInterval(this.intervals)
        this.setState({
            textarea: "",
            intervals:0,
            displaytext:"Text don't match",
            fired:false,
            wordpermin:null,
            close:false
        });
    }

    render(){
        var self=this;
        return(
            <div className="countUp">
                <Main parentCall={this.handleCall} parentCall2={this.handleCall2} parentCall3={this.handleCall3}/>
                <textarea readOnly={this.state.close} rows="8" onChange={this.startCounter} value={this.state.textarea}
                ref={
                    function(el){
                        self._input = el;
                    }
                }></textarea>
                <div className="timer">
                <p>Timer: <b>{this.props.countValue}</b></p>
                <p><b>{this.state.displaytext}</b></p>
                <p>Your WPM: <b>{this.state.wordpermin}</b></p>
                <button type="submit" onClick={this.reset}>Start Over</button>
                </div>
            </div>
        );
    }
}

export default Counter;