let button = document.querySelector("button");
let div = document.querySelector("div");
console.log(div);
let changeContent = function(e) {
  //element.innerText = "Foi";
  //console.log(e.target);
  console.log(this);
  //e.target.textContent = "Foi";
  this.textContent = "Foi";
}

let change = function(e){
  e.stopPropagation();
  console.log(e.target.parentNode.style.background = "yellow")
  // console.log(this.parentNode.style.background = "yellow");
}

button.addEventListener("click", changeContent);
div.addEventListener("click", change);
