// Write a function to return a list of engineers who are above 30 years of age.

const data = require('./people');

function age_above_30(data,age_of){
    let val = data.reduce( (acc,employee) =>{
        if(employee.profession == 'Engineer' && employee.age > 30){
            acc.push(employee.name);
        }
        return acc;
    },[]);
    console.log(val.length);
    return val;
}

console.log(age_above_30(data,30));
