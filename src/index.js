import { pageLoad } from "./tabs/pageLoad";
import { menuLoad } from "./tabs/menuLoad";
import { contactLoad } from "./tabs/contactLoad";
import "./main.css";

let homeBtn = document.getElementById("homeBtn");
let menuBtn = document.getElementById("menuBtn");
let contactBtn = document.getElementById("contactBtn");

homeBtn.addEventListener("click", pageLoad);
menuBtn.addEventListener("click", menuLoad);
contactBtn.addEventListener("click", contactLoad);
pageLoad();
