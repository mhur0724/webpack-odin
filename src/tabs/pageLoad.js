export function pageLoad() {
  let content = document.getElementById("content");
  content.innerHTML = "";
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  img.src = "https://picsum.photos/200/300";
  h1.innerText = "Restaurant";
  p.innerText = "hello from restaurant";

  content.appendChild(img);
  content.appendChild(h1);
  content.appendChild(p);
}
