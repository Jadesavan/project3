function counter(state,action){
    if (state===undefined){
        return { count: 0.0 };
    }

    var count=state.count;

    switch(action.type){
        case "increase":

            return { count:Math.round(count*10+1)/10 };
        case "decrease":
            return {count:0};
        default:
            return state;
    }
}

export default counter;