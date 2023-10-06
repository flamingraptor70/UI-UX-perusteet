'use strict';

// selectors
const checkbox = document.getElementById("checkbox");

// state
const theme = localStorage.getItem("theme");

// on mount
theme && document.body.classList.add("dark");

// Addd an event listener to dark mode
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  
  //Darkmode to LocalStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
  localStorage.removeItem("theme")
  }
})



//Checkbox to localsotrage

// Function to save checkbox value to localStorage
function saveCheckboxState() {
  const checkbox = document.getElementById('checkbox');
  localStorage.setItem('checkbox', checkbox.checked);
}

// Function to load checkbox value from localStorage
function loadCheckboxState() {
  const checkbox = document.getElementById('checkbox');
  checkbox.checked = JSON.parse(localStorage.getItem('checkbox')) || false;
}

// Add an event listener to the checkbox
document.getElementById('checkbox').addEventListener('change', saveCheckboxState);

// Load checkbox value from localStorage when the page loads
loadCheckboxState();
