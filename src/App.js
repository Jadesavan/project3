import { connect } from "react-redux";
import Counter from "./Counter";

//Map Redux state to component props
function mapStateToProps(state){
    return{
        countValue: state.count,
    };
}



//action
var increaseAction={type: "increase"}
var decreaseAction={type: "decrease"}


//map redux action to component props
function mapDispatchToProps(dispatch){
    return{
        increaseCount:function(){
            console.log("dispatch")
            return dispatch(increaseAction)
        },
        decreaseCount:function(){
            return dispatch(decreaseAction)
        }
    };
}


//TheHoc
var connectedComponent=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;