const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName + ".md", data, (error) =>
    error ? console.error(error) : console.log(`${fileName + ".md"} generated!`)
  );
};

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is project title?",
    },

    {
      type: "input",
      name: "description",
      message: "What is the project description?",
    },
    {
      type: "input",
      name: "contents",
      message: "Table of Contents",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage?",
    },
    {
      type: "input",
      name: "license",
      message: "What is the license",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the tests?",
    },
    {
      type: "input",
      name: "questions",
      message: "Any questions?",
    },
  ]);
};

async function init() {
  try {
    const answers = await questions();

    const readMe = generateMarkdown(answers);

    await writeFileAsync("ReadMe.md", readMe);

    console.log("Successfully generated Readme file ");
  } catch (err) {
    console.log(err);
  }
}
init();
