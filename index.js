const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = ([
    {
        type:"input",
        name:"Username",
        message:"What is your GitHub username?",
        validate: function (answer) {
            if(answer.length < 1) {
                return console.log("You must enter a Github usename.");
            }
            return true;
        }
    },
    {
        type:"input",
        name:"Title",
        message:"What is the title of your project",
        validate: function (answer) {
            if(answer.length < 1) {
                return console.log("You must enter a valid title of your project.")
            }
            return true;
        }
    },
    {
        type:"input",
        name:"Description",
        message:"Enter a description of your project.",
        validate: function (answer) {
            if(answer.length < 1) {
                return console.log("You must enter a valid description.")
            }
            return true;
        }
    },
    {
        type:"input",
        name:"Installation",
        message:"Describe the installation process for user, if any.",
    },
    {
        type:"input",
        name:"Usage",
        message:"Enter instructions of intended usage for your project.",
    },
    {
        type:"list",
        name:"License",
        message:"Choose your license for your project. ",
        choices: ['Apache', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open'],
    
        
    },
    {
        type:"input",
        name:"Contributors",
        message:"List all contributors of this project.",
    },
    {
        type:"input",
        name:"Tests",
        message:"Provide any tests written for your project, and give any examples.",
    },
    {
        type:"input",
        name:"Email",
        message:"Please enter your email.",
    }



    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if(err) {
            return console.log(err);
        } else {
        console.log("Success! Your README.md file has been generated.")
        }
    })
}


// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data))
        console.log(data)
    })

} 

// Function call to initialize app
init();
