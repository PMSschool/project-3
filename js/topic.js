let navBar = document.querySelector(".bars");
let myNav = document.querySelector(".header .links nav");


navBar.onclick = () => {
  navBar.classList.toggle("close");
  myNav.classList.toggle("open");
};
// end nav bar

let myUlActive = document.querySelectorAll(".sections ul.active li");
let cards = document.querySelectorAll(".sections .card");

myUlActive.forEach((li) =>{
  li.addEventListener("click",removeActive);
  li.addEventListener("click",managecards);
});

function removeActive (){
  myUlActive.forEach((li) =>{
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function managecards(){
  cards.forEach((card) =>{
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.topic).forEach((el) =>{
    el.style.display = "block";
  });
}
// end managecard

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      let firstElementChild = panel.children[0].id;
                  let secondElementChild = panel.children[1].id;
                  // console.log(firstElementChild);
                  // console.log(secondElementChild);
                  printStringByLetter(secondElementChild,firstElementChild);
    }
  });
}
//end accordion

