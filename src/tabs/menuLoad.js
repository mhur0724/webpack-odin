let menu = [
  {
    food: "spaghetti",
    description: "pasta with tomato sauce and meatballs",
    price: "$12.99",
  },
  {
    food: "pizza",
    description: "pepperoni and mushrooms",
    price: "$3 a slice or $15 for a pie",
  },
  {
    food: "sushi",
    description: "raw fish on rice",
    price: "$4 for 2 pieces",
  },
];

export function menuLoad() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (const item of menu) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let description = document.createElement("p");
    let price = document.createElement("p");
    h1.innerText = item.food;
    description.innerText = item.description;
    price.innerText = item.price;
    div.appendChild(h1);
    div.appendChild(description);
    div.appendChild(price);
    content.appendChild(div);
  }
}
