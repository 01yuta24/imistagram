window.addEventListener("load",function(){
  const username = document.querySelector("#username-field");
  const password = document.querySelector("#password-field");
  const errorEl = document.querySelector(".error");
  
  function signUpFn(){
    if (username.value && password.value){
      localStorage.setItem("username",username.value);
      window.location.href = "index.html";
    } else {
      username.value = "";
      password.value = "";
      errorEl.innerHTML = "正しく入力を行ってください";
      return false;
    }
  }
  
  const btn = document.querySelector(".signin-btn");
  btn.addEventListener("click",signUpFn);
});
