'use strict';
// selectors
const checkbox = document.getElementById("checkbox");

// state
const theme = localStorage.getItem("theme");

// on mount
theme && document.body.classList.add("dark");


checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme")
  }
})
