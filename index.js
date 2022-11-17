const colors = [
  "#000080","#00008B","#0000CD","#0000FF","#006400","#008000","#008080","#008B8B",
  "#00BFFF","#00CED1","#00FA9A","#00FF00","#00FF7F","#00FFFF","#00FFFF","#191970",
  "#1E90FF","#20B2AA","#228B22","#2E8B57","#2F4F4F","#2F4F4F","#32CD32","#3CB371",
  "#40E0D0","#4169E1", 
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
