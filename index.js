// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(sym='*') {
  return function (str) {
    return `You are ${sym}${str}${sym}!`;
  };
}

const Calculator = { 
  add: (x,y) => {return x + y}, 
  multiply: (x,y) => {return x * y},
  subtract: (x,y) => {return x - y},
  divide: (x,y) => {return x / y}
}

function actionApplyer(num, fun) {
  return fun.reduce((prev, curr) => curr(prev), num)
}