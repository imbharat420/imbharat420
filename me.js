import boxen from "boxen"
import chalk from "chalk"
import inquirer from "inquirer"
import clear from "clear"
import open from "open"
import fs from 'fs'
import request from 'request'
import path from 'path'
import ora from 'ora'
import cliSpinners from 'cli-spinners'
clear();

const prompt = inquirer.createPromptModule();

let loader = ora({
    text: 'Click on the link to open ...',
    spinner: cliSpinners.dots
}).start()

let loaderVisit = ora({
    text: 'Link Opening...',
    spinner: cliSpinners.dots
})
//closeLoader after 2 seconds link to be opened
let closeLoader = () => {
    loader.stop()
    loaderVisit.start()
    setTimeout(() => {
        loaderVisit.stop()
        //thanks for visiting cyan
        console.log(chalk.cyanBright.bold("Thanks for visiting!"))
    },2000)
}



const questions = [
    {
        type: "list",
        name: "action",
        message: "Me, I and Myself:",
        choices: [
            {
                name: `Send me an ${chalk.blueBright.bold("email")}?`,
                value: () => {
                    open("mailto:imbharat420@gmail.com");
                    closeLoader()
                }
            },
            {
                name: `View my ${chalk.blueBright.bold("Portfolio")}?`,
                value: () => {
                    open("https://bharat.bargali.me");
                    closeLoader()
                }
            },
            {
                name:`Wanna See ? ${chalk.blueBright.bold("Web terminal")}?`,
                value: () => {
                    open("https://bharat.bargali.me/portfolio");
                    closeLoader()
                }
            },
            {
                name: "Close.",
                value: () => {
                    console.log("Let's talk about the next big thing.\n");
                    closeLoader()
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.blue("             Bharat Singh"),
    handle: chalk.white("@imbharat420"),
    work: `${chalk.white("Software Developer")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("imbharat420"),
    github: chalk.gray("https://github.com/") + chalk.cyan("imbharat420"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.cyan("imbharat420"),
    web: chalk.gray("https://") +  chalk.cyan("bharat.bargali.me"),
    npx: chalk.blue("npx") + " " + chalk.white("imbharat420"),

    labelWork: "        ",
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "I am a software developer who loves to build things."
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} to open links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());