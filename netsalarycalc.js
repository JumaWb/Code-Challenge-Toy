//Net Salary Calculator
function calculateNetSalary(basicSalary, benefits){
    //constants for tax rate deductions
    const BAND_1 = 24000;
    const RATE_1 = 0.1;
    const BAND_2 = 8333;
    const RATE_2 = 0.25;
    const BAND_3 = 467667;
    const RATE_3 = 0.3;
    const BAND_4 = 300000;
    const RATE_4 = 0.325;
    const RATE_5 = 0.35;
    const PERSONAL_TAX_RELIEF = 2400;
  
    // constants for NSSF rates and deductions
    const NSSF_BAND_1 = 24000;
    const NSSF_RATE_1 = 0.06;
    const NSSF_BAND_2 = 8333;
    const NSSF_RATE_2 = 0.06;
    const NSSF_BAND_3 = 467667;
    const NSSF_RATE_3 = 0.06;
    const NSSF_BAND_4 = 300000;
    const NSSF_RATE_4 = 0.06;
    const NSSF_RATE_5 = 0.06;
  
    //lets calculate gross salary
    const grossSalary = basicSalary + benefits
  
    //lets calculate tax for payee
    let tax = 0;
    if (grossSalary<= BAND_1){
      tax = grossSalary * RATE_1;
    }else if (grossSalary<= BAND_1 + BAND_2){
      tax = BAND_1 * RATE_1 + (grossSalary - BAND_1) * RATE_2;
    }else if (grossSalary<= BAND_1 + BAND_2 + BAND_3){
      tax = BAND_1 * RATE_1 + BAND_2 * RATE_2 + (grossSalary - BAND_1 - BAND_2) * RATE_3;
    }else if (grossSalary<= BAND_1 + BAND_2 + BAND_3 + BAND_4){
      tax = BAND_1 * RATE_1 + BAND_2 * RATE_2 + BAND_3 * RATE_3 + (grossSalary - BAND_1 - BAND_2 - BAND_3) * RATE_4;
    }else{
      tax = BAND_1 * RATE_1 + BAND_2 * RATE_2 + BAND_3 * RATE_3 + BAND_4 * RATE_4 + (grossSalary - BAND_1 - BAND_2 -BAND_3 - BAND_4) * RATE_5;
    }
  
    // Calculate NSSF deductions
    let nssfDeductions = 0;
    if (grossSalary <= NSSF_BAND_1) {
        nssfDeductions = grossSalary * NSSF_RATE_1;
    } else if (grossSalary <= NSSF_BAND_1 + NSSF_BAND_2) {
        nssfDeductions = NSSF_BAND_1 * NSSF_RATE_1 + (grossSalary - NSSF_BAND_1) * NSSF_RATE_2;
    } else if (grossSalary <= NSSF_BAND_1 + NSSF_BAND_2 + NSSF_BAND_3) {
        nssfDeductions = NSSF_BAND_1 * NSSF_RATE_1 + NSSF_BAND_2 * NSSF_RATE_2 + (grossSalary - NSSF_BAND_1 - NSSF_BAND_2) * NSSF_RATE_3;
    } else if (grossSalary <= NSSF_BAND_1 + NSSF_BAND_2 + NSSF_BAND_3 + NSSF_BAND_4) {
        nssfDeductions = NSSF_BAND_1 * NSSF_RATE_1 + NSSF_BAND_2 * NSSF_RATE_2 + NSSF_BAND_3 * NSSF_RATE_3 + (grossSalary - NSSF_BAND_1 - NSSF_BAND_2 - NSSF_BAND_3) * NSSF_RATE_4;
    } else {
        nssfDeductions = NSSF_BAND_1 * NSSF_RATE_1 + NSSF_BAND_2 * NSSF_RATE_2 + NSSF_BAND_3 * NSSF_RATE_3 + NSSF_BAND_4 * NSSF_RATE_4 + (grossSalary - NSSF_BAND_1 - NSSF_BAND_2 - NSSF_BAND_3 - NSSF_BAND_4) * NSSF_RATE_5;
    }
  
    // Calculate net salary
        const netSalary = grossSalary - tax -nhifDeductions - nssfDeductions;
  
        // Return calculated values
        return {
            grossSalary: grossSalary,
            tax: tax,
            nhifDeductions: nhifDeductions,
            nssfDeductions: nssfDeductions,
            netSalary: netSalary
        };
    }
  
    // Example usage:
    const basicSalary = 30000; // Example basic salary
    const benefits = 5000; // Example benefits
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Tax (Payee):", salaryDetails.tax);
    console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
    console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);
    
  