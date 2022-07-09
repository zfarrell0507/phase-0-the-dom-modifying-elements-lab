const element = document.getElementById("main");
element.remove();
const newHeader = document.createElement("h1");
document.body.append(newHeader);
const victory = document.createElement("victory");
victory.id = "victory";
victory.textContent = ("Zachary is the champion");
newHeader.append(victory);