// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme=({githubUsername, email, projectName, description, license, dependencies, tests, usage, contribution}) =>
`# ${projectName}

## Description:
${description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation:
${dependencies}

## Usage:
${usage}

## How to Contribute:
${contribution}

## Tests:
${tests}

## Questions:
For any questions you can email us at [${email}](mailto:${email}) or Github [@${githubUsername}](https://github.com/${githubUsername})

## License:
${license}
    `


    inquirer.prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you want for your project?',
        choices: ["MIT", "Apache", "GNU", "None"]
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does user need to know abbout contributing to the repo?'
    }
    
])

.then((ans) => {
    console.log(ans);
    const content =generateReadme(ans);
    fs.writeFile(`./${ans.projectName}_README.md`,generateReadme(ans),(err)=>{
        if(err) {throw err;}
        console.log('README genereated!')
    })
})


