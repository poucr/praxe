const burgerEl = document.getElementById("burger");
const menuEl = document.getElementById("menu");

burgerEl.addEventListener("click", function(){
  if(menuEl.classList.contains("hidden")){
    menuEl.classList.add("block");
    menuEl.classList.remove("hidden");
  }else{
    menuEl.classList.remove("block");
    menuEl.classList.add("hidden");
  }
})