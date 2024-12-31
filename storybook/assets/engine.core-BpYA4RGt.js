import{h as c}from"./moment-BD2cCKma.js";function v({period:t,budgets:e}){const n=e.map(r=>u(r,t)),a=n.reduce((r,o)=>r+o.totalExpense,0);return{period:t,budgetEvents:n,totalExpense:a}}function u(t,e){const n=[];let a=0;const r=f(e,t.frequency),o=t.interestRate?t.interestRate/r:0;t.initialAmount&&(n.push({date:t.startDate,value:t.initialAmount}),a+=t.initialAmount);for(let s=c(e.startDate);s.isBefore(e.endDate);s.add(1,t.frequency))if(s.isBetween(t.startDate,t.endDate,void 0,"[]")){const l=t.interestRate?a*o:0,i=t.amount+l;n.push({date:s.format("YYYY-MM-DD"),value:i}),a+=i}return{budget:t,period:e,events:n,totalExpense:a}}function f(t,e){if(console.log("getNumberOfPeriods",{period:t,frequency:e}),e==="day")return 365;if(e==="week")return 52;if(e==="month")return 12;if(e==="quarter")return 4;if(e==="year")return 1;throw new Error(`Invalid frequency: ${e}`)}export{v as c};