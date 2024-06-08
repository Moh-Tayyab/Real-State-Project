import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { buyHouse } from "./buy.js";
import { rentHouse } from "./onRent.js";
import { saleHouse } from "./sale.js";

interface Property {
  city: string;
  societyName: string;
  houseNo: string;
  streetNo: number;
  price: number;
  data: {
    hhName: string;
    phoneNo: number;
    fMember: number;
  };
}

// Main function
function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "select",
        message: chalk.italic.bold("What would you like to do: "),
        choices: ["Buy House", "House on Rent", "Sale House"],
      },
    ])
    .then((response) => {
      // condition statement
      if (response.select === "Buy House") {
        buyHouse();
      } else if (response.select === "House on Rent") {
        rentHouse();
      } else if (response.select === "Sale House") {
        saleHouse();
      }
    });
}

// Beautiful and attractive welcome message
const welcomeMessage = () => {
  const animation = chalkAnimation.rainbow(
    "@<********^********>@<***************>@<***************>@\n" +
    "       Welcome to the Pakistan Real State!!!...       \n" +
    "@<********^********>@<***************>@<***************>@"
  );
  setTimeout(() => {
    animation.stop(); // Stop the animation after a few seconds
    console.log(chalk.bold.cyan.bgGray("\nYour reliable partner in finding the perfect home.\n"));
    mainMenu();
  }, 5000); // Duration for the animation to run
};

welcomeMessage();
