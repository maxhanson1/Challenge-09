


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

 function renderlicenseBadge () {
  if (license === "Mozilla") {
     return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost")
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    else {
    return ""
  }
} 
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  if (license === "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)"; 
 } else if (license === "MIT") {
   return "(https://opensource.org/licenses/MIT)";
 } else if (license === "Apache") {
   return "(https://opensource.org/licenses/Apache-2.0)";
 } else if (license === "Boost")
   return "(https://www.boost.org/LICENSE_1_0.txt)";
   else {
   return ""
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseSection(license) {
  if (license === "Mozilla") {
    return "Mozilla" 
 } else if (license === "MIT") {
   return "MIT";
 } else if (license === "Apache") {
   return "Apache";
 } else if (license === "Boost")
   return "Boost";
   else {
   return ""
 }
  }





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    
  # ${data.title}
  
    ${data.description}
  
    ${data.renderlicenseBadge}
  
    
    
  ---
  ##  Table of Contents
  
    ${data.tableofcontents}
  
  ---
  ## Installation
  
    ${data.installation}
  
  ---
  
  ## User Story
    
    ${data.usage}
  

  
  
    ${data.renderLicenseSection}
  
    License used for this project - ${(data.license)}
    * For more information on license types, please reference this website
    for additional licensing information - ${data.renderLicenseLink} 
  
  ---
  
  ## Contributing:
    
    These are the developers that contributed to this project 
    ${data.contributing}
  
  
  ---
  
  ## Tests:
    ${data.tests}
  
  ---

    Here are some commmonly asked questions about program:
    ${data.questions}
  
  
  ## If you have any other questions reach out to:

  * GitHub Username: ${data.gitUser}
  * GitHub Email: ${data.gitEmail}
    
  `;
  }
  
 

  
  module.exports = generateMarkdown;
  

  