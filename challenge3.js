const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(`R ${leoBalance} ${sarahBalance}`);
const owedFinal = Math.abs(owed);
const leo = (` ${leoName} + ${leoSurname}  `Owed: R ` ${leoBalance} `)``);
const sarah = (` ${sarahName}  ${sarahSurname}   `(Owed: R ` + ${sarahBalance}  `)`);
const total = (`Total amount owed: R ${owedFinal.toFixed(2)}`);
const Result = leo + sarah + divider + divider + total + owedFinal + divider;

console.log(Result)