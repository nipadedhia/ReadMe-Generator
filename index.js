const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [];
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },

    {
      type: "input",
      name: "github",
      message: "Github Username?",
    },
    {
      type: "input",
      name: "LinkedIn",
      message: "What is your LinkedIn Url?",
    },
  ]);
};

function writeToFile(fileName, data) {}

function init() {}

init();
