// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path')

const generateMarkdown = require ('./utils/generateMarkdown');



// TODO: Create a function to initialize app
// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please put a description for the README',
  },
  {
    type: 'input',
    name: 'tableofcontents',
    message: 'Please input the table of contents ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Any installation requirements for this project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'List the usage of your program',
  },
  {
      type: 'list',
      name: 'license',
      message: 'Select any licenses you used for this project',
      choices: [  
      "Mozilla",
      "MIT",
      "Apache",
      "Boost",
      "None",
      ]
  },
  {
      type: 'input',
      name: 'contributing  ',
      message: 'Who contributed on this project?',
  },
  {
      type: 'input',
      name: 'tests',
      message: 'List any tests that you have conducted ',
  },
  {
      type: 'input',
      name: 'questions',
      message: 'Put any frequently asked questions you think people would have',
  },
  {
      type: 'input',
      name: 'gitUser',
      message: 'Put your GitHub username here',
  },
      {
      type: 'input',
      name: 'gitEmail',
      message: 'Put the email tied to your GitHub username here',
  },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userResponse) => {
     console.log('README created!')
     writeToFile('README.md', generateMarkdown({...userResponse}))  
})
}


init()











