// code your solution here
function saturdayFun(fun = 'roller-skate') {
    let want = 'This Saturday, I want to ' + fun + '!';
    return (want)
}

function mondayWork(work = 'go to the office') {
    let want = 'This Monday, I will ' + work + '.';
    return (want);
}

function wrapAdjective(highlight = '*') {
    return function (bla = 'special') {
        return `You are ${highlight}${bla}${highlight}!`;
    }
}