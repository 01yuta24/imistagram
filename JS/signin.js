function signUpFn(){
  const username = document.querySelector("#username-field").value;
  const password = document.querySelector("#password-field").value;
  console.log(username,password);

  localStorage.setItem("username",username);

  window.location.href = "index.html";
}

  const btn = document.querySelector(".signin-btn");

  btn.addEventListener("click",signUpFn);