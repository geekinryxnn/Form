document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const yearOfBirth = document.getElementById("yearOfBirth").value;

    if (name && yearOfBirth) {
      const output = `Hello, ${name}! You were born in ${yearOfBirth}.`;
      document.getElementById("output").textContent = output;
    } else {
      document.getElementById("output").textContent =
        "Please fill in all fields.";
    }
  });
