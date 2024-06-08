import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function saleHouse() {
  const saleAnimation = chalkAnimation.karaoke("Let's help you sell your house!\n");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  saleAnimation.stop();

  const result = await inquirer.prompt([
    {
      type: 'input',
      name: 'city',
      message: chalk.italic.bold.bgGray("Enter city Name: "),
    },
    {
      type: 'input',
      name: 'societyName',
      message: chalk.italic.bold.bgGray("Enter Society Name: "),
    },
    {
      type: 'input',
      name: 'houseNo',
      message: chalk.italic.bold.bgGray("Enter House no: "),
    },
    {
      type: 'input',
      name: 'streetNo',
      message: chalk.italic.bold.bgGray("Enter Street No: "),
    },
    {
      type: 'input',
      name: 'price',
      message: chalk.italic.bold.bgGray("Enter price you are demanding (amount in $): "),
    },
    {
      type: 'input',
      name: 'hhName',
      message: chalk.italic.bold.bgGray("Enter House Holder Name: "),
    },
    {
      type: 'input',
      name: 'phoneNo',
      message: chalk.italic.bold.bgGray("Enter phone No (with hyphens): "),
    }
  ]);

  console.log(chalk.bold.green(`
    City Name: ${result.city}
    Society Name: ${result.societyName}
    House No: ${result.houseNo}
    Street No: ${result.streetNo}
    Demanded Price: $${result.price}
    House Holder Name: ${result.hhName}
    Contact No: ${result.phoneNo}
  `));

  const confirmation = await inquirer.prompt({
    type: 'confirm',
    name: 'input',
    message: chalk.bold.cyan("Kindly check your details: "),
  });

  if (confirmation.input) {
    const thanksAnimation = chalkAnimation.neon("Thank you for your positive response!!...\n");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    thanksAnimation.stop();
    console.log(chalk.bold.magenta("\t\tMy team will contact you later!!!"));
  } else {
    console.log(chalk.bold.red("Something went wrong. Please try again!!..."));
    saleHouse();
  }
}

export { saleHouse };
