
    document.getElementById("bmiForm").addEventListener("submit", function(event) {
event.preventDefault();

// Get the input values
const gender = document.getElementById("gender").value;
const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
const age = document.getElementById("age").value;

if (height && weight && age) {
    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let resultMessage = `Your BMI is: ${bmi.toFixed(2)}`;

    // Determine BMI category
    if (bmi < 18.5) {
        resultMessage += " (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultMessage += " (Normal weight)";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultMessage += " (Overweight)";
    } else {
        resultMessage += " (Obese)";
    }

    document.getElementById("result").innerHTML = resultMessage;
} else {
    document.getElementById("result").innerHTML = "Please fill in all fields.";
}
});

