
function generateMarkdown(data) {
  return `
  
  # ${data.Title}
  https://github.com/${data.Username}/${data.Title}

  ## Description
  ${data.Description}
  ## Table of Contents:
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Contributors](#Contributors)
  -[Tests](#Tests)
  -[Contact](#Contact)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  This project is licensed under the ${data.License} license.
  ![badge](https://img.shileds.io/badge/license-${data.License}-blue)

  ##Tests
  ${data.Tests}

  ## Contributors
  ${data.Contributors}

  ## Contact
  If you have any questions about the repository, feel free to contact ${data.Username} directly @: ${data.Email}

`;
}

module.exports = generateMarkdown;
