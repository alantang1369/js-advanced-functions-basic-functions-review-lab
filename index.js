function saturdayFun(thing="roller-skate"){
     return `This Saturday, I want to ${thing}!`;
}
const mondayWork = function(thing="go to the office"){
    return `This Monday, I will ${thing}.`;
}
function wrapAdjective(visual="*"){
    return function(para="special"){
        return `You are ${visual}${para}${visual}!`
    }
}

let Calculator = {
    add: function(a,b){return a + b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){ return a/b}
}
function actionApplyer(num, array){
    let result = num;
    for (let i=0; i < array.length;i++) {
        result = array[i](result)
    }
    return result;

}