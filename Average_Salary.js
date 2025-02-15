const data = require('./people');

function all_profession_salary(data) {
    return data.reduce( (acc,person) => {
        let profession = person.profession;
        if(!acc[profession]){
            acc[profession] = [];
        }
        let person_details = acc[profession];
        person_details.push(person.salary);
        acc[profession] = person_details
        return acc;
    },{})
}

let Salary = all_profession_salary(data);
console.log(Salary);
function avg_salary(data){

    let result = {};
    for(let profession in data){
        let no_of_person = data[profession].length;
        let salary = data[profession];
        result[profession] = ((salary.reduce( (acc,ele) => acc+ele ,0))/no_of_person).toFixed(2);
    }
    console.log(result);
}

avg_salary(Salary);