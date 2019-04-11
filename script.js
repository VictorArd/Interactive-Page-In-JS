// Exercice N°1
var footer = document.getElementsByTagName("footer")[0];
var i = 1;
footer.addEventListener("click", function(){
  console.log("clique n°"+ i++);
})

// Exercice N°2
/*NON FONCTIONNEL
var hamburger  = document.getElementById("navbarHeader");
var content = document.getElementById("collapse")[0];
hamburger.addEventListener("click", function() {
  content.disabled = true;
});
*/

// Exercice N°3
var carOne = document.getElementsByClassName("card")[0];
var editBtn = carOne.getElementsByTagName("button")[1];
carOne.addEventListener("click", function(){
  editBtn.style.color = "red";
})

// Exercice N°4
var carTwo = document.getElementsByClassName("card")[1];
var editBtnD = carTwo.getElementsByTagName("button")[1];

function toggleColor() {
  if (editBtnD.style.color === "green") {
    editBtnD.style.color = "";
  } else {
    editBtnD.style.color = "green";
  }

}
carTwo.addEventListener("click", toggleColor);

// Exercice N°5
var link = document.getElementsByTagName("link")[0];
var navbar = document.getElementsByClassName("navbar")[0];
href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
function toggleBootstrap() {
  if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
    link.href = "";
  } else {
    link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
}
navbar.addEventListener("dblclick", toggleBootstrap);

// Exercice N°6
var card = document.getElementsByClassName("card")[0];
var viewBtn = card.getElementsByTagName("button")[1];
var imageTag = card.getElementsByTagName("img")[0];
