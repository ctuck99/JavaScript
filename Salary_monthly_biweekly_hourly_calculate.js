var salary = prompt("Enter salary in $/year: ");

alert("You entered: $" + salary);

var payMonthly, payBiWeekly, payHourly; // Montly pay, Bi-weekly pay and equivalent hourly pay before deductions

payMonthly = salary / 12;
payBiWeekly = salary / 26;
payHourly = salary / (40 * 52);

alert("Your pay before deductions will be...");
alert(`Monthly: $${payMonthly.toFixed(2)}`);
alert(`Bi-weekly: $${payBiWeekly.toFixed(2)}`);
alert(`Hourly equivalent: $${payHourly.toFixed(2)}`);
