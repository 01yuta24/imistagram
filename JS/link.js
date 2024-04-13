window.addEventListener("load",function(){

const homeBtn = document.querySelector(".home-btn");
const findBtn = document.querySelector(".find-btn");
const movieBtn = document.querySelector(".movie-btn");
const profileBtn = document.querySelector(".profile-btn");


homeBtn.addEventListener("click",function(){
  window.location.href = "index.html";
});

findBtn.addEventListener("click",function(){
  window.location.href = "find.html";
});

movieBtn.addEventListener("click",function(){
  window.location.href = "movie.html";
});

profileBtn.addEventListener("click",function(){
  window.location.href = "profile.html";
});
});