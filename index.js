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
    function createTeam() {
        console.log("Lets create your team !")
        inquirer.prompt([{
            type: 'input',
            name: "teamName",
            message: "What is your teams name?",
            validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter at least one character.';
            },
        },
        {
            
        }
        ])
    }
}