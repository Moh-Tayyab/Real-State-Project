import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

async function buyHouse() {
    let selection = await inquirer.prompt(
        {
            type: 'list',
            name: 'city',
            message: 'Please Select City Name: ',
            choices: ['Islamabad', 'Karachi', 'Lahore', 'Faisalabad', 'Multan']
        }
    );

    let societyChoices = [];

    switch (selection.city) {
        case 'Lahore':
            societyChoices = [
                'Bahria Town Lahore',
                'Lake City',
                'DHA Lahore',
                'MODEL Town',
                'Etihad Town Lahore',
                'WAPDA Town',
                'ParkView City',
                'Askari 8',
                'Paragon City'
            ];
            break;
        case 'Karachi':
            societyChoices = [
                'Bahria Town Karachi',
                'DHA Karachi',
                'Clifton',
                'Korangi Creek Cantonment',
                'PECHS (Pakistan Employees Cooperative Housing Society)',
                'ASF Housing Society',
                'Gulistan e Johar',
                'Gulshan-e-Iqbal',
                'North Nazimabad'
            ];
            break;
        case 'Islamabad':
            societyChoices = [
                'Bahria Town Islamabad',
                'Defence Housing Authority, Islamabad',
                'Gulberg Islamabad',
                'Blue World City',
                'Park View City',
                'Kingdom Valley Islamabad',
                'Multi Gardens B-17'
            ];
            break;
        case 'Multan':
            societyChoices = [
                'DHA Multan',
                'Royal Orchard Multan',
                'Wapda Town Multan',
                'Bahria Town Multan',
                'Model Town Multan',
                'Cantt Multan'
            ];
            break;
        case 'Faisalabad':
            societyChoices = [
                'Wapda City',
                'Model City',
                'Millat Town',
                'Madina Town',
                'Eden Valley',
                'Citi Housing',
                'Sitara Sapna City',
                'Raza Garden',
                'FDA City',
                'Kohinoor City'
            ];
            break;
        default:
            buyHouse();
            return;
    }

    let societySelection = await inquirer.prompt(
        {
            type: 'list',
            name: 'society',
            message: 'Select Society would you like to live: ',
            choices: societyChoices
        }
    );

    let priceInput = await inquirer.prompt(
        {
            type: 'input',
            name: 'price',
            message: chalk.italic.bgGreenBright('Please enter price in which range you can buy a house: '),
            validate: value => {
                const valid = !isNaN(value);
                return valid || 'Please enter a number';
            }
        }
    );

    const price = parseFloat(priceInput.price);

    if (price >= 100) {
        chalkAnimation.rainbow(`\t\tCongratulations! You can buy a new house in $${price} at ${societySelection.society}, ${selection.city}.`);
    } else {
        console.log(chalk.italic.redBright('\t\tI have not any house in this price range. Please enter an amount greater than $99.'));
    }
}



export { buyHouse };
