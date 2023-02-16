//main header
//search
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

let isNotSearchClick = false;

document.addEventListener("click", function(e){
  if(!e.target.classList.contains("material-symbols-outlined")){
    isNotSearchClick = true;
  }else{
    isNotSearchClick = false;
  }
})
searchIconEl.addEventListener("click", function(){
  if(searchEl.classList.contains("active")){
    searchEl.classList.add("active");
    searchIconEl.focus();
    searchIconEl.setAttribute("placeholder", "통합검색");
  }else if(isNotSearchClick){
    searchInputEl.focus();
    searchIconEl.setAttribute("placeholder", "");
    isNotSearchClick = false;
  }else{
    searchEl.classList.remove("active");
  }
})
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
})//blur = focusout

//swiper
//swiper notice
const swiperNotice = new Swiper(".notice .notice-line .inner .inner__left .swiper", {
  direction: "vertical",
  loop: true,
  autoplay: true,
})

//swiper promotion
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next"
  }
})

//autoplay 컨트롤
function controlAutoPlay(){
  if(swiperPromotion.autoplay.running === false){
    swiperPromotion.autoplay.start();
  }else{
    swiperPromotion.autoplay.stop();
  }
}

//toggle promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
promotionToggleBtn.addEventListener("click", function(){
  console.log("!");
  if(promotionSection.classList.contains("hide")){
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  }else{
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
})

//animation
window.onload = function(){
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
}

//animation scroll
window.addEventListener("scroll", function(){
  console.log(window.scrollY);
  if(window.scrollY > 490){
    const elsalvadorSection = document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
  if(window.scrollY > 1100){
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  if(window.scrollY > 1530){
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  if(window.scrollY > 2370){
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  if(window.scrollY > 2940){
    const findstoreSection = document.querySelector(".find-store");
    findstoreSection.classList.add("animate");
  }
})