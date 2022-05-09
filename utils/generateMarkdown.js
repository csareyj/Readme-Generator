//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![License](https://img.shields.io/badge/license-MIT-red.svg)'
  } else if (license === 'Apache 2.0') {
    badge ='![License] (https://img.shields.io/badge/license-Apache%202.0-yellow.svg)'
  } else if (license === 'GPL v3.0') {
    badge ='![License] (https://img.shields.io/badge/license-GPL%20v3.0-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT'){
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0'){
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else{
    licenseLink = ''
  }
  return licenseLink;
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None'){
    licenseSection = ''
  } else{
    licenseSection =
    `License: ${license}`
  }
  return licenseSection;
}

// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ### * [License](#license)
  ### * [Installation](#installation)
  ### * [Usage](#Usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installations:
  ### You must install the following for this app to function:
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Contributors:
  ### ${answer.contributions}

  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ### ${answer.test}

  ## Questions:
  ### If you have any questions, you may contact me at either
  ### GitHub: https://github.com/${answer.askMe}
  ### or
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
