export default function contact() {
  const home = document.createElement("div");
  home.classList = "home";

  const textContact = document.createElement("span");
  textContact.classList = "home-text";
  textContact.textContent = "Contact - 6010534980";
  home.appendChild(textContact);

  const textEmail = document.createElement("span");
  textEmail.classList = "home-text";
  textEmail.textContent = "Email - ammarburger@burger.co.uk";
  home.appendChild(textEmail);

  const image = document.createElement("img");
  image.classList = "map";
  home.appendChild(image);

  return document.getElementById("content").appendChild(home);
}
