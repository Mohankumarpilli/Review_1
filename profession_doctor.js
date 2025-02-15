//     Doctor: [] ,// you have to add all the names of the persons whose profession is doctor,


const data = require('./people');

function doctor(data,profession){
    let answer = {};
    
    let profession_details = data.reduce( (acc,person) => {
        if(person.profession == profession){
            acc.push(person.name);
        }
        return acc;
    },[]);
    answer[profession] = profession_details;
    return answer;
}

console.log(doctor(data,'Doctor'));