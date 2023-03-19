import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

function page() {
  const content = document.getElementById("content");
  content.textContent = "Success";
  const div = document.createElement("div");
  div.innerHTML = "Hello";
  return div;
}

content.appendChild(page());
