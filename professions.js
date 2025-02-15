//     Doctor: [] ,// you have to add all the names of the persons whose profession is doctor,


const data = require('./people');

function person_profession(data){
    return data.reduce( (acc,person) => {
        let profession = person.profession;
        if(!acc[profession]){
            acc[profession] = [];
        }
        let person_details = acc[profession];
        person_details.push(person.name);
        acc[profession] = person_details
        return acc;
    },{})
}

console.log(person_profession(data));


