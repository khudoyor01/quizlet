const img1 = document.querySelector(".img");
const arrow = document.querySelector(".arrow");
const mob = document.querySelector(".mobile__search__area");
const mob1 = document.querySelector(".mobile__navbar__area");
const signBtn = document.querySelector(".signup");
const modalReg = document.querySelector(".modal_reg");
const modalExitBtn = document.querySelector(".modal_close");

signBtn.addEventListener("click", () => {
  modalReg.classList.add("active");
});

modalExitBtn.addEventListener("click", () => {
  modalReg.classList.remove("active");
});

// img1.addEventListener("click", () => {
//   mob.classList.add("active");
//   mob1.classList.add("active");
// });

// arrow.addEventListener("click", () => {
//   mob.classList.remove("active");
//   mob1.classList.remove("active");
// });

const btn = document.querySelector(".btn");

let inputError =
  /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

let globEmail;
let globrPwd;

function regPanel() {
  let userName = document.querySelector(".uname").value;
  let lastName = document.querySelector(".lname").value;
  let emailResult = document.querySelector(".email_result");
  let email = document.querySelector(".email").value;
  let pwd = document.querySelector(".pwd").value;
  let rPwd = document.querySelector(".rpwd").value;
  let userData = {
    userName,
    lastName,
    email,
    pwd,
    rPwd,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  globEmail = JSON.parse(localStorage.getItem("userData"));

  if (inputError.test(email)) {
    emailResult.innerHTML = "email valid";
  } else if (!inputError.test(email)) {
    emailResult.innerHTML = "email invalid";
  }

  let pwdResult = document.querySelector(".pwd_result");
  let repwdResult = document.querySelector(".repwd_result");

  if (pwd.length < 8) {
    pwdResult.innerHTML = "8 ta belgidan kam bo'lmasin";
  } else {
    pwdResult.innerHTML = "to'g'ri";
  }

  if (pwd === rPwd) {
    repwdResult.innerHTML = "to'g'ri";
  } else {
    repwdResult.innerHTML = "Mos kelmadi";
  }
}

btn.addEventListener("click", () => {
  regPanel();

  console.log(globEmail.email);
  console.log(globEmail.rPwd);
});

let modalSignBtn = document.querySelector(".signin");
let signinBtn = document.querySelector(".signin_btn");
let modalSign = document.querySelector(".modal_signin");
let signCloseBtn = document.querySelector(".modal_sign_close");

modalSignBtn.addEventListener("click", () => {
  modalSign.classList.add("active");
});

signCloseBtn.addEventListener("click", () => {
  modalSign.classList.remove("active");
});

let searchImg = document.querySelector(".search__img");
let navbarSearch = document.querySelector(".navbar__search");
let navbarReg = document.querySelector(".navbar__reg");
let navbarSearchArea = document.querySelector(".navbar__search__area");

searchImg.addEventListener("click", () => {
  if (searchImg.src.match("./icons/search-outline.svg")) {
    navbarSearch.style.display = "block";

    navbarReg.style.display = "none";

    navbarSearchArea.style.width = "50%";

    searchImg.src = "./icons/close-outline.svg";
  } else if (searchImg.src.match("./icons/close-outline.svg")) {
    searchImg.src = "./icons/search-outline.svg";

    navbarSearch.style.display = "none";

    navbarReg.style.display = "block";

    navbarSearchArea.style.width = "4%";
  }
});
