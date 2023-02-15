//main header
//search
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function(){
  searchInputEl.classList.toggle("menu-toggle");
  if(searchInputEl.classList.contains("menu-toggle")){
    searchInputEl.focus();
  }else{
    searchInputEl.blur();
  }
})



searchInputEl.addEventListener("focus", function(){
  searchInputEl.setAttribute("placeholder", "통합검색");
})

searchInputEl.addEventListener("blur", function(){
  searchInputEl.setAttribute("placeholder", "");
})