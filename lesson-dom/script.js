const link = document.querySelector("a");
const sect = document.querySelector("section");
const para = document.createElement("p");
const text = document.createTextNode("- the premier source for web development knowledge.");
const paraLink = document.querySelector("p");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozzilla.org";

para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

paraLink.appendChild(text);