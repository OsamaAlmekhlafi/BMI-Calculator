# Done By: Osama Abdo Modhish
# Function to calculate BMI
def calculate_bmi(weight, height):
    bmi = weight / (height * height)
    return bmi

# Function to interpret BMI
def interpret_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"


weight = float(input("Enter your weight in kilograms: "))
height = float(input("Enter your height in meters: "))

bmi = calculate_bmi(weight, height)
interpretation = interpret_bmi(bmi)

print("Your Calculated BMI value is:>", bmi)
print("the BMI value and determine the appropriate description Interpretation:>", interpretation)
