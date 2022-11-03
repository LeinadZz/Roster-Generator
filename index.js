const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./src/htmlRenderer");

const teamMembers = [];
const idArray = [];

console.log('Welcome to the Team Generator !');

function appMenu() {
    function createManager() {
        console.log("Time to create your team ! Let's start off with your Manager.")
        inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your Manager?',
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter at least one character.';
            },
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is your Managers ID?',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enter a number greater than zero.";
            },
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your Managers email?',
            validate: (answer) => {
                const pass = answer.match(/^\S+@\S+\.\S+$/);
                if (pass) {
                    return true;
                }
                return "Please enter a valid email address.";
            },
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?",
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return "Please enetr a number greater than zero."
            },
        },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerID,
                answers.managerEmail,
                answers.officeNumber
            );
            teamMembers.push(manager);
            idArray.push(answers.managerID);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'newMember',
                message: 'Which type of member would you like to add to your team?',
                choices: [
                    'Engineer',
                    'Intern',
                    'None',
                ],
            },
        ])
        .then((userChoice) => {
            switch (userChoice.memberChoice) {
                case 'Engineer': addEngineer();
                break;
                case 'Intern': addIntern();
                break;
                default: buildTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is your Engineer's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter atleast one character';
                },
            },
            {
                
            }
        ])
    }
}