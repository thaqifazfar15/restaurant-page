import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

function page() {
  const content = document.createElement("div");
  content.setAttribute("id", "content");

  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const h1 = document.createElement("h1");
  h1.textContent = "Ammar Burger";
  header.appendChild(h1);

  const tabs = document.createElement("div");
  tabs.classList = "tabs";
  header.appendChild(tabs);

  const components = [home, menu, contact];

  let currentIndex = 0;

  function borderBottom(index) {
    for (let i = 0; i < 3; i++) {
      if (index == i) {
        tabs.childNodes[i].style.borderBottom = "1px solid rgba(255,255,255,1)";
      } else
        tabs.childNodes[i].style.borderBottom = "1px solid rgba(255,255,255,0)";
    }
  }

  function setComponents(index) {
    if (currentIndex == index) return;
    content.childNodes[1].remove();
    return components[index]();
  }

  ["Home", "Menu", "Contact"].map((e, index) => {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      setComponents(index);
      currentIndex = index;
    });
    button.addEventListener("click", () => {
      borderBottom(index);
    });
    // button.classList = e.toLowerCase();
    button.textContent = e;
    tabs.appendChild(button);
  });

  borderBottom(0);

  return content;
}

document.body.appendChild(page());
home();
