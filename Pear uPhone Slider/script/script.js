let backgroundimg = document.querySelector(".backgroundimg");
let backgroundimg2 = document.querySelector(".backgroundimg2");
let backgroundimg3 = document.querySelector(".backgroundimg3");
let fix3 = document.querySelector(".fix3");
let fix4 = document.querySelector(".fix4");
let fix5 = document.querySelector(".fix5");
backgroundimg2.style.display = "none";
backgroundimg3.style.display = "none";
let kontrol = 0;
let togg = 0;
let x = document.querySelector(".x");
fix5.onclick = function () {
  if (kontrol == 0) {
    backgroundimg3.style.display = "none";
    backgroundimg.style.display = "none";
    backgroundimg2.style.display = "block";
    backgroundimg2.style.marginTop = "-222px";
    kontrol = 1;
  } else if (kontrol == 1) {
    backgroundimg3.style.display = "block";
    backgroundimg.style.display = "none";
    backgroundimg2.style.display = "none";
    backgroundimg3.style.marginTop = "-222px";
    kontrol = 2;
  } else if (kontrol == 2) {
    backgroundimg.style.display = "block";
    backgroundimg2.style.display = "none";
    backgroundimg3.style.display = "none";
    backgroundimg.style.marginTop = "-222px";
    kontrol = 0;
  }
};
fix4.onclick = function () {
  if (kontrol == 0) {
    backgroundimg3.style.display = "block";
    backgroundimg.style.display = "none";
    backgroundimg2.style.display = "none";
    backgroundimg3.style.marginTop = "-222px";
    kontrol = 2;
  } else if (kontrol == 2) {
    backgroundimg2.style.display = "block";
    backgroundimg.style.display = "none";
    backgroundimg3.style.display = "none";
    backgroundimg2.style.marginTop = "-222px";
    kontrol = 1;
  } else if (kontrol == 1) {
    backgroundimg.style.display = "block";
    backgroundimg2.style.display = "none";
    backgroundimg3.style.display = "none";
    backgroundimg.style.marginTop = "-222px";
    kontrol = 0;
  }
};
fix3.onclick = function () {
  if (togg == 0) {
    backgroundimg3.style.display = "none";
    backgroundimg.style.display = "none";
    backgroundimg2.style.display = "none";
    fix4.style.display = "none";
    fix5.style.display = "none";
    togg = 1;
  } else {
    togg = 0;
    backgroundimg.style.display = "block";
    kontrol = 1;
    fix4.style.display = "block";
    fix5.style.display = "block";
  }
};
