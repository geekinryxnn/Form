// scripts.js

function calculateAkanname(event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Retrieve input values
  const dayOfBirth = parseInt(document.getElementById("day of birth").value);
  const yearOfBirth = parseInt(document.getElementById("year of birth").value);
  const gender = document.getElementById("gender").value;

  // Validate input
  if (!dayOfBirth || !yearOfBirth || gender === "disabled selected") {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Validate the day of the week
  if (day of birth < 1 || dayOfBirth > 31) {
    alert("Please enter a valid day of birth (1-31).");
    return;
  }

  // Calculate the day of the week (Zeller's Congruence formula)
  const month = 1; // Assuming January for simplicity
  const K = yearOfBirth % 100; // Year of the century
  const J = Math.floor(year of birth / 100); // Zero-based century
  const dayOfWeek = Math.floor(
    (dayOfBirth +
      Math.floor((13 * (month + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) -
      2 * J) %
      7
  );

  // Akan names by gender and day of the week
  const akanNames = {
    Male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    Female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  };

  // Find the corresponding Akan name
  const akanName = akanNames[gender][dayOfWeek];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Display the result
  document.getElementById(
    "output"
  ).textContent = `You were born on a ${daysOfWeek[dayOfWeek]}, and your Akan name is ${akanName}.`;
}

  const birthday = document.getElementById("birthday").value;
  const gender = document.getElementById("gender").value;
  const resultDiv = document.getElementById("result");
  const output = document.getElementById("output");

  if (!birthday || !gender) {
    output.textContent = "Please provide both your birthday and gender.";
    resultDiv.style.display = "block";
    return;
  }
});
