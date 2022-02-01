// code your solution here
function saturdayFun (activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();
function mondayWork(action = "go to the office"){
    return (`This Monday, I will ${action}.`)
}
saturdayFun();
function wrapAdjective(visualFlair = "*"){
   return function innnerFunction(parameterOne = "special"){
       return `You are ${visualFlair}${parameterOne}${visualFlair}!`
   }
}
wrapAdjective();