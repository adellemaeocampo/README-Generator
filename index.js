const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, install, usage, contribution, testing, badge, github, email }) =>
`# ${title}
    
## Description
${description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
${install}
    
## Usage
${usage}
    
## License
This application is covered under the ${badge} license.
    
## Contributing
${contribution}
    
## Tests
${testing}
    
## Questions
For additional questions, you can reach me through:
- GitHub: [${github}](https://github.com/${github})
- Email: ${email}
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title', 
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project? ',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter how to install your project: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter any relevant usage information: ',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the contributors of your project: ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Enter any relevant information for testing in your project: ',
        },
        {
            type: 'list',
            name: 'badge',
            message: 'Choose a licence for your application: ',
            choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ])

    .then((answers) => {
        const genREADME = generateREADME(answers);
        fs.writeFile('README.md', genREADME, (err) =>
            err ? console.log(err) : console.log('success!')
        );
    });
