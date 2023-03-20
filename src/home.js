export default function home() {
  const home = document.createElement("div");
  home.classList = "home";

  const image = document.createElement("img");
  image.classList = "person";
  home.appendChild(image);

  const text = document.createElement("span");
  text.classList = "home-text";
  text.textContent =
    "The best Burger in the Malaysia since 1969! Each burger is made with full of passion and love. Open 24/7 everyday.";
  home.appendChild(text);

  return document.getElementById("content").appendChild(home);
}
