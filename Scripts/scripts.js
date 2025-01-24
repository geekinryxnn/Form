



document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthday = document.getElementById("birthday").value;
  const gender = document.getElementById("gender").value;
  const resultDiv = document.getElementById("result");
  const output = document.getElementById("output");

  if (!birthday || !gender) {
    output.textContent = "Please provide both your birthday and gender.";
    resultDiv.style.display = "block";
    return;
  }

  const date = new Date(birthday);
  const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  };

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (dayOfWeek >= 0 && dayOfWeek <= 6) {
    const akanName = akanNames[gender][dayOfWeek];
    const dayName = dayNames[dayOfWeek];

    output.textContent = `You were born on a ${dayName}. Your Akan name is ${akanName}.`;
  } else {
    output.textContent = "Invalid date. Please try again.";
  }

  resultDiv.style.display = "block";
});
