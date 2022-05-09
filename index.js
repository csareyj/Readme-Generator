//packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

//  An array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput =>{
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your project title');
        return false;
      }
    }
  },
  
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
    validate: licenseInput =>{
      if (licenseInput) {
        return true;
      } else {
        console.log('Please select one of the four options');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'description',
    message: 'Provide a project description?',
    validate: descriptionInput =>{
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please provide a project description');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'installation',
    message: 'What steps are needed to install your project?',
    validate: installInput =>{
      if (installInput) {
        return true;
      } else {
        console.log('Please provide installation steps');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'usage',
    message: 'What is the use of your project?',
    validate: usageInput =>{
      if (usageInput) {
        return true;
      } else {
        console.log('Please provide a use for your project');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'contributions',
    message: 'What guidelines must others follow in order to contribute?',
    validate: contributionsInput =>{
      if (contributionsInput) {
        return true;
      } else {
        console.log('Please enter contribution guidelines');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'test',
    message: 'How do you test this project?',
    validate: testingInput =>{
      if (testingInput) {
        return true;
      } else {
        console.log('Please explain how to test this project');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'askMe',
    message: 'What is your GitHub username so others can reach you for questions?',
    validate: testInput =>{
      if (testInput) {
        return true;
      } else {
        console.log('Please provide your GitHub username so others can reach out to you with questions');
        return false;
      }
    }
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email so there is another way others can reach you for questions?',
    validate: emailingInput =>{
      if (emailingInput) {
        return true;
      } else {
        console.log('Please provide your email so others can reach out to you with questions');
        return false;
      }
    }
  },
];

// function to write README file
const writeToFile = fileContent =>{
    return new Promise((resolve, reject) =>{
      fs.writeFile('generatedREADME.md', fileContent, err =>{
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true
        })
      })
    })
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answer){
    console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
  })
}

// Function call to initialize app
init();

module.exports = questions;