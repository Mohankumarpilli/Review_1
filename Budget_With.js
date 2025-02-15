// Get all employees across all divisions working on projects with a budget exceeding $150,000

const fs = require('fs');

const data = JSON.parse(fs.readFileSync('organisation.json','utf-8'));

function budget_of_five(data){
    let answer = []
    let division = data.organisation.divisions;
    division.forEach(div => {
        let department = div.departments;
        department.forEach(dep => {
            let employee = dep.employees;
            employee.forEach(emp => {
                let project = emp.projects;
                project.forEach(element => {
                    if(element.budget > 150000){
                        answer.push(emp.name);
                    }
                })
            })
        })
    });
    console.log(answer.length);
    return answer
}
console.log(budget_of_five(data));