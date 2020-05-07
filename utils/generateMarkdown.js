const generateMarkdown = (data) => {
  return `
# ${data.title}

![License: ${
    data.license ? data.license : "None"
  }](https://img.shields.io/badge/License-${
    data.license ? data.license : "None"
  }-brightgreen)

![Tweeting](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)

__Description:__
${data.description}

__Installation:__
${data.installation}

__Usage:__
${data.usage}

__Contributors:__
${data.contributors}

__Tests:__
${data.test}

__Questions:__
${data.questions}

`;
};

module.exports = generateMarkdown;
