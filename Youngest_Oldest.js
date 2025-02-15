const data = require('./people');

function youngest_oldest(data){
    return data.reduce( (acc,ele) => {
        if(!acc[ele.profession]){
            acc[ele.profession] = {}
        }
        
        let details = acc[ele.profession];
        details[ele.name] = ele.age;

        acc[ele.profession] = details;
        return acc;
    },{})

}

let details = youngest_oldest(data);

function young_old(data){
    let obj = {}
    for(let info in data){
        let age_info = Object.entries(data[info]);
        age_info.sort( (a,b) => a[1] - b[1]);
        obj[info] = [{younges : age_info[0][0],age : age_info[0][1]}, {oldest : age_info[age_info.length-1][0],age : age_info[age_info.length-1][1]}];
    }
    return obj;
}

console.log(young_old(details));