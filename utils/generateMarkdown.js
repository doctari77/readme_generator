function generateMarkdown(data) {
  return `
# ${data.title}

##Description
  ${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
  ${data.installation}
##Usage
  ${data.usage}
 ##Contributing 
  ${data.contributing}
  #Tests
  ${data.test}
##Questions
 Any questions about the repo contact ${data.user}directly at ${data.email}

`;
}

module.exports = generateMarkdown;
