# Code-Challenge-Toy
## Instructions

Ensure you have a compatible JavaScript environment to run this code. You can use any modern web browser's developer console or a JavaScript runtime environment like Node.js.

Copy the code from calculateGrade.js into your JavaScript environment.

Call the testGrade function with a mark as an argument to test the grade calculation. The mark should be a number between 0 and 100.


testGrade(55); // Replace 55 with any mark you want to test.

After running the function, you will see the student's grade printed in the console.


## Calculate Grade

*The calculate Grade function takes a mark as input and returns the corresponding grade according to the following criteria:

A: Marks greater than 79

B: Marks between 60 and 79 (inclusive)

C: Marks between 49 and 59 (inclusive)

D: Marks between 40 and 49 (inclusive)

E: Marks less than 40

The testGrade function checks if the provided mark is a valid number between 0 and 100. If valid, it calculates and prints the grade using the calculateGrade function. If the mark is not valid, an error message is displayed.

## Speed Detector

### Installation:

Simply copy the function calculateDemeritPoints into your JavaScript codebase.
Function Parameters:

speed: The speed of the vehicle in km/h.
Constants:

speedLimit: The legal speed limit in km/h.

kmPerDemeritPoint: The number of kilometers over the speed limit that corresponds to one demerit point.

demeritPointsThreshold: The maximum number of demerit points allowed before the license is suspended.
### Functionality:

If the vehicle's speed is within the legal limit (speed <= speedLimit), it will log "Ok".

If the vehicle's speed exceeds the legal limit, it calculates demerit points based on the speed difference.

If the calculated demerit points are within the threshold (demeritPoints <= demeritPointsThreshold), it logs the number of demerit points.

If the calculated demerit points exceed the threshold, it logs "License suspended".

### Usage:

Call the function calculateDemeritPoints(speed) with the speed of the vehicle as the argument.

### Example:

calculateDemeritPoints(80); // This will test with a speed of 80 km/h.

### Output:

If the speed is within the limit, it will log "Ok".

If the speed exceeds the limit, it will log either the calculated demerit points or "License suspended" depending on the situation.


## Net Salary Calculator

### Installation:

Copy the function calculateNetSalary into your JavaScript codebase.

### Function Parameters:

basicSalary: The basic salary of the individual.

benefits: Any additional benefits or allowances received by the individual.

### Constants:

Tax Rate Bands and Rates:

BAND_1: Threshold for the first tax rate.

RATE_1: Tax rate for the first band.

BAND_2: Threshold for the second tax rate.

RATE_2: Tax rate for the second band.

BAND_3: Threshold for the third tax rate.

RATE_3: Tax rate for the third band.

BAND_4: Threshold for the fourth tax rate.

RATE_4: Tax rate for the fourth band.

RATE_5: Tax rate for income exceeding all bands.

PERSONAL_TAX_RELIEF: Personal tax relief amount.

### NSSF Rate Bands and Rates:

NSSF_BAND_1: Threshold for the first NSSF rate.

NSSF_RATE_1: NSSF rate for the first band.

NSSF_BAND_2: Threshold for the second NSSF rate.

NSSF_RATE_2: NSSF rate for the second band.

NSSF_BAND_3: Threshold for the third NSSF rate.

NSSF_RATE_3: NSSF rate for the third band.

NSSF_BAND_4: Threshold for the fourth NSSF rate.

NSSF_RATE_4: NSSF rate for the fourth band.

NSSF_RATE_5: NSSF rate for income exceeding all bands.

### Functionality:

Calculates the gross salary by adding the basic salary and benefits.

Computes the tax amount based on the gross salary and tax rate bands.

Calculates NSSF deductions based on the gross salary and NSSF rate bands.

Computes the net salary by subtracting tax, NHIF deductions (not explicitly defined in the code), and NSSF deductions from the gross salary.

### Usage:

Call the function calculateNetSalary(basicSalary, benefits) with the individual's basic salary and benefits as arguments.

### Output:

The function returns an object containing the breakdown of gross salary, tax, NHIF deductions 
