
//  Done By: Osama Abdo Modhish

// Function to calculate BMI
function calculateBMI(weight, height) {
    var bmi = weight / (height * height); // Calculate BMI using weight and height
    return bmi; // Return the calculated BMI
}

// Function to interpret BMI
function interpretBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight"; // BMI less than 18.5 is considered underweight
    } else if (bmi < 25) {
        return "Normal weight"; // BMI between 18.5 and 24.9 is considered normal weight
    } else if (bmi < 30) {
        return "Overweight"; // BMI between 25 and 29.9 is considered overweight
    } else {
        return "Obese"; // BMI greater than or equal to 30 is considered obese
    }
}

// Prompt the user for weight and height
var weight = parseFloat(prompt("Enter your weight in kilograms: "));
var height = parseFloat(prompt("Enter your height in meters: "));

// Calculate BMI and interpret it
var bmi = calculateBMI(weight, height);
var interpretation = interpretBMI(bmi);

// Display the results to the console
console.log("Your BMI is: " + bmi.toFixed(2)); // Display BMI rounded to two decimal places
console.log("Interpretation: " + interpretation); // Display the interpretation of BMI