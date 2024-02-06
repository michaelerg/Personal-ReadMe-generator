const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your project description?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is your installation?'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'What is your usage?'
  },

  {
        type: 'list',
        name: 'license',
        message: 'What is your License?',
        choices: ['None','MIT','APACHE_2.0','BSD_3']
  },
  {
        type: 'input',
        name: 'contributors',
        message: 'Who are your contributors?'
  },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions) 
    .then(res=>{

        const markdown = generateMarkdown(res)
        fs.writeFileSync('./utils/markdown.md',markdown)
    })
//INQUIRER PROMP
//GET RESPONSE BACK


}

// function call to initialize program
init();
