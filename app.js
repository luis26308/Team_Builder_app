const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

function teamCreater() {

    inquirer.prompt([
        {
            type: "list",
            message: "What position is the employee?",
            name: "position",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Done"
            ]
        }
    ]).then(newEmployee => {
        switch (newEmployee.position) {
            case "Manager": addManager();
                break;

            case "Engineer": addEngineer();
                break;

            case "Intern": addIntern();
                break;

            case "Done": fs.writeFileSync(outputPath, render(employees));
                break

        }
    })
}
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },

        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ])

        .then(newEmployee => {
            let newManager = new Manager(
                newEmployee.name,
                newEmployee.id,
                newEmployee.email,
                newEmployee.officeNumber
            )

            employees.push(newManager)

            teamCreater();
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },

        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        }
    ])

        .then(newEmployee => {
            let newEngineer = new Engineer(
                newEmployee.name,
                newEmployee.id,
                newEmployee.email,
                newEmployee.username
            )

            employees.push(newEngineer)

            teamCreater();
        })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },

        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },

        {
            type: "input",
            message: "What is your school?",
            name: "school"
        }
    ])

        .then(newEmployee => {
            let newIntern = new Intern(
                newEmployee.name,
                newEmployee.id,
                newEmployee.email,
                newEmployee.school
            )

            employees.push(newIntern)

            teamCreater();
        })
}

teamCreater();





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
