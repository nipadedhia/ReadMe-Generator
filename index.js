const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [];

const inquirer = () => {
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

function writeToFile(fileName, data) {}

function init() {}

init();
