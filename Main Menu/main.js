import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { buyHouse } from "../House Buy/buy.js";
import { saleHouse } from "../House Sale/app.js";
import { rentHouse } from "../House on Rent/index.js";
// Main function
function mainMenu() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "select",
            message: chalk.italic.bold("What would you like to do: "),
            choices: [
                { name: `✅ House Buy 🏠`, value: `House Buy` },
                { name: `🏠 House on Rent 🛋️`, value: `House on Rent` },
                { name: `🏷️  House Sale 🏚️`, value: `House Sale` },
            ],
        },
    ])
        .then((response) => {
        // condition statement
        if (response.select === "House Buy") {
            buyHouse();
        }
        else if (response.select === "House on Rent") {
            rentHouse();
        }
        else if (response.select === "House Sale") {
            saleHouse();
        }
    });
}
// Beautiful and attractive welcome message
const welcomeMessage = () => {
    const animation = chalkAnimation.rainbow("@<********^********>@<***************>@<***************>@\n" +
        "     \t   Welcome to Paradise Real State!!!...       \n" +
        "@<********^********>@<***************>@<***************>@");
    setTimeout(() => {
        animation.stop(); // Stop the animation after a few seconds
        console.log(chalk.bold.cyan.bgGray("\nYour reliable partner in finding the perfect home!!.\n"));
        mainMenu();
    }, 5000); // Duration for the animation to run
};
welcomeMessage();
