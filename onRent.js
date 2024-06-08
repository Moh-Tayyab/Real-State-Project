import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function rentHouse() {
    // Start animation
    const welcomeAnimation = chalkAnimation.rainbow("\t\tWelcome to the House Rental Service!");
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Let the animation play for 2 seconds
    welcomeAnimation.stop(); // Stop the animation
    let select = await inquirer.prompt([
        {
            type: "list",
            name: "city",
            message: chalk.italic.bold.bgGray("Please Select City Name: "),
            choices: ["Islamabad", "Karachi", "Lahore", "Faisalabad", "Multan"],
        },
    ]);
    let societies = [];
    switch (select.city) {
        case "Islamabad":
            societies = [
                "Bahria Town Islamabad",
                "Defence Housing Authority, Islamabad",
                "Gulberg Islamabad",
                "Blue World City",
                "Park View City",
                "Kingdom Valley Islamabad",
                "Multi Gardens B-17",
            ];
            break;
        case "Karachi":
            societies = [
                "Bahria Town Karachi",
                "DHA Karachi",
                "Clifton",
                "Korangi Creek Cantonment",
                "PECHS (Pakistan Employees Cooperative Housing Society)",
                "ASF Housing Society",
                "Gulistan e Johar",
                "Gulshan-e-Iqbal",
                "North Nazimabad",
            ];
            break;
        case "Lahore":
            societies = [
                "Bahria Town Lahore",
                "Lake City",
                "DHA Lahore",
                "MODEL Town",
                "Etihad Town Lahore",
                "WAPDA Town",
                "ParkView City",
                "Askari 8",
                "Paragon City",
            ];
            break;
        case "Faisalabad":
            societies = [
                "Wapda City",
                "Model City",
                "Millat Town",
                "Madina Town",
                "Eden Valley",
                "Citi Housing",
                "Sitara Sapna City",
                "Raza Garden",
                "FDA City",
                "Kohinoor City",
            ];
            break;
        case "Multan":
            societies = [
                "DHA Multan",
                "Royal Orchard Multan",
                "Wapda Town Multan",
                "Bahria Town Multan",
                "Model Town Multan",
                "Cantt Multan",
            ];
            break;
        default:
            rentHouse();
            return;
    }
    let selectSociety = await inquirer.prompt([
        {
            type: "list",
            name: "society",
            message: chalk.italic.bgBlueBright("Please Select any society would you like to live in: "),
            choices: societies,
        },
    ]);
    let priceEnter = await inquirer.prompt([
        {
            type: "input",
            name: "price",
            message: chalk.italic.bgYellow("In which range you know a house on Rent: "),
        },
    ]);
    const price = parseFloat(priceEnter.price);
    if (price < 50) {
        console.log(chalk.italic.whiteBright.bgRedBright(`\t\tPlease enter an amount greater than $49.`));
        return rentHouse();
    }
    let familyMember = await inquirer.prompt([
        {
            type: "input",
            name: "fMember",
            message: chalk.italic.bold.bgCyanBright("How many family members will live in that house: "),
        },
    ]);
    let contactNo = await inquirer.prompt([
        {
            type: "input",
            name: "phoneNo",
            message: chalk.magentaBright.bgGrey("Enter phone number (with hyphens): "),
        },
    ]);
    console.log(chalk.bold.greenBright(`\tCity is ${select.city}, ${selectSociety.society} Housing Society, in $${price}, Family Members are ${familyMember.fMember}, and your contact number is ${contactNo.phoneNo}.`));
    let confirmation = await inquirer.prompt([
        {
            type: "confirm",
            name: "customerInfo",
            message: chalk.bold.cyanBright.bgMagentaBright.bgYellow("Kindly check your information you provided: "),
        },
    ]);
    if (confirmation.customerInfo) {
        const thanksAnimation = chalkAnimation.neon("\t\tThanks for using our services!!!");
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Let the animation play for 2 seconds
        thanksAnimation.stop();
    }
    else {
        console.log(chalk.bold.bgRedBright("\t\t\tSomething went wrong. Please try again!!\n"));
        rentHouse();
    }
}
export { rentHouse };
