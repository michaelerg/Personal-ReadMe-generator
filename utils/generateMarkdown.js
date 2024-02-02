// function to generate markdown for README

// the # is hard coded 
// the ${} is where it plugs in the information from 
//formats a string and write its to a file
function generateMarkdown(data) {
  return `# ${data.title}

##dfg badge

## description 
${data.description}

## Table of contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Test](#test)
5. [Contributors](#contributors)

## Installation
${data.installation}

## Usage
${data.usage}


## License
${data.license}


## Contributors
${data.contributors}

`;
 

}
//creates the readme string
module.exports = generateMarkdown;
