export default function menu() {
  const menu = document.createElement("div");
  menu.classList = "menu";

  const menuList = [
    ["Chicken Normal", "$10"],
    ["Beef Normal", "$10"],
    ["Chicken Double", "$12"],
    ["Beef Double", "$12"],
    ["Chicken Cheese", "$12"],
    ["Beef Cheese", "$12"],
  ];

  menuList.map((arr) => {
    const div = document.createElement("div");
    div.classList = "menu-list";

    const img = document.createElement("img");
    img.classList = "menu-img";
    div.appendChild(img);

    const nameText = document.createElement("span");
    nameText.classList = "menu-name";
    nameText.textContent = arr[0];
    div.appendChild(nameText);

    const priceText = document.createElement("span");
    priceText.classList = "menu-price";
    priceText.textContent = arr[1];
    div.appendChild(priceText);

    menu.appendChild(div);
  });

  return document.getElementById("content").appendChild(menu);
}
