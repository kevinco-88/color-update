const selectCont = document.querySelector(".selector_container");
const navigator = document.querySelector(".navigatorConatiner");
const nuancesColor = document.querySelector(".nuancesColor");
const mainColor = document.querySelector(".mainColor");
const box = document.querySelectorAll(".box");
const box1 = document.querySelectorAll(".boxA");
const more = document.querySelector(".buttonShowMore");
const less = document.querySelector(".buttonShowLess");
const carsContainer = document.querySelector(".carsContainer");
const items = document.querySelectorAll("img");
const p = document.querySelectorAll("p");
const inputColor = document.querySelector(".inputColor");
const colorPicker = document.querySelector(".colorPicker");
const finalContent = document.querySelector(".finalContent");
const ok = document.querySelector(".ok");





navigator.insertAdjacentHTML(
  "afterbegin",
  `<span>${items.length} items</span>`
);

setInterval(function () {
  inputColor.textContent = document.getElementById("inputColor").value;
});

const start = function () {
  more.style.color = "white";
  more.style.background = "#0D6EFD";
  more.style.border = "#0D6EFD";
  document.getElementById(`single`).style.background = "#0D6EFD";
  document.getElementById(`single`).style.border = "#0D6EFD";
  finalContent.classList.add("hide");
  ok.classList.add("hide")
};

ok.addEventListener("click",function(){
  finalContent.classList.add("hide");
  ok.classList.add("hide")
})

const results = function(){
  finalContent.classList.remove("hide");
  ok.classList.remove("hide")
}


start();

let active = "single";
let i = [];
let primeColor =" ";
let secondColor = " ";
selectCont.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("id");
  if (id == "single") {
    items.forEach((x) => (x.style.border = "1px solid transparent"));
    i = [];
    document.getElementById(`${id}`).style.background = "#0D6EFD";
    document.getElementById(`${id}`).style.border = "#0D6EFD";

    document.getElementById(`multi`).style.background = "#6C757D";
    document.getElementById(`multi`).style.border = "#6C757D";

    box.forEach((x) => (x.style.border = "1px solid transparent"));
    box1.forEach((x) => (x.style.border = "1px solid transparent"));

    document.querySelector(".maincolorText").textContent = " ";
    document.querySelector(".bicolorText").textContent = " ";
    document.querySelector(".topcolorText").textContent = " ";
    active = "single";
    primeColor = " ";
    secondColor = " ";
  } else if (id == "multi") {
    items.forEach((x) => (x.style.border = "1px solid transparent"));
    i = [];
    document.getElementById(`${id}`).style.background = "#0D6EFD";
    document.getElementById(`${id}`).style.border = "#0D6EFD";

    document.getElementById(`single`).style.background = "#6C757D";
    document.getElementById(`single`).style.border = "#6C757D";

    box.forEach((x) => (x.style.border = "1px solid transparent"));
    box1.forEach((x) => (x.style.border = "1px solid transparent"));

    document.querySelector(".maincolorText").textContent = " ";
    document.querySelector(".bicolorText").textContent = " ";
    document.querySelector(".topcolorText").textContent = " ";
    active = "multi";
    primeColor = " ";
    secondColor = " ";
  }
});

more.addEventListener("click", function () {
  document.querySelector(".carsContainer").style.gridTemplateColumns =
    "repeat(14, auto)";
  more.style.color = "white";
  more.style.background = "#0D6EFD";
  more.style.border = "#0D6EFD";

  less.style.color = "black";
  less.style.background = "#f8f9fa";
  less.style.border = "#f8f9fa";
});

less.addEventListener("click", function (e) {
  document.querySelector(".carsContainer").style.gridTemplateColumns =
    "repeat(12, auto)";
  less.style.color = "white";
  less.style.background = "#0D6EFD";
  less.style.border = "#0D6EFD";

  more.style.color = "black";
  more.style.background = "#f8f9fa";
  more.style.border = "#f8f9fa";
});

let k;
carsContainer.addEventListener("click", function (e) {
  const id = e.target.getAttribute("id");
  if (!id) return;
  
  if (active == "single") {
    items.forEach((x) => (x.style.border = "1px solid transparent"));
    document.getElementById(`${id}`).style.border = "1px solid #0D6EFD";
    i = id;
  } else if (active == "multi") {
    console.log(id);
    
    i.push(id)
    if (document.getElementById(`${id}`).style.border == "1px solid rgb(13, 110, 253)") {
    
    document.getElementById(`${id}`).style.border = "1px solid transparent";
      
    } else {
      document.getElementById(`${id}`).style.border = "1px solid #0D6EFD";
    }
    
  }
});

let boX;

mainColor.addEventListener("click", function (e) {
  e.preventDefault(e);

  const id = e.target.getAttribute("id");
  box.forEach((x) => (x.style.border = "1px solid transparent"));

  document.querySelector(".maincolorText").textContent = " ";
  document.querySelector(".bicolorText").textContent = " ";
  document.querySelector(".topcolorText").textContent = " ";

  document.getElementById(`${id}`).style.border = "1px solid #0d6efd";
  primeColor = e.target.getAttribute("value");
  if (boX == id) {
    box.forEach((x) => (x.style.border = "1px solid transparent"));
    boX = " ";

    primeColor = undefined;
  } else {
    boX = id;
    document.getElementById(`${id}`).style.border = "1px solid #0d6efd";
  }
});

let boXa;
nuancesColor.addEventListener("click", function (e) {
  e.preventDefault(e);
  const id = e.target.getAttribute("id");


  box1.forEach((x) => (x.style.border = "1px solid transparent"));

  document.querySelector(".maincolorText").textContent = " ";
  document.querySelector(".bicolorText").textContent = " ";
  document.querySelector(".topcolorText").textContent = " ";

  document.getElementById(`${id}`).style.border = "1px solid #0d6efd";
  secondColor = e.target.getAttribute("value");

  if (boXa == id) {
    box1.forEach((x) => (x.style.border = "1px solid transparent"));
    boXa = " ";

    secondColor = undefined;
  } else {
    boXa = id;
    document.getElementById(`${id}`).style.border = "1px solid #0d6efd";
  }
});

colorPicker.addEventListener("click", function (e) {
  if (active == "single") {
    const id = e.target.getAttribute("id");
    if (!id) return;
    if (id == "maincolorText") {
      document.querySelector(".maincolorText").textContent =
        document.getElementById("inputColor").value;
      box.forEach((x) => (x.style.border = "1px solid transparent"));
      box1.forEach((x) => (x.style.border = "1px solid transparent"));
      primeColor = " ";
      secondColor = " ";
    } else if (id == "bicolor") {
      document.querySelector(".bicolorText").textContent =
        document.getElementById("inputColor").value;
      box.forEach((x) => (x.style.border = "1px solid transparent"));
      box1.forEach((x) => (x.style.border = "1px solid transparent"));
      primeColor = " ";
      secondColor = " ";
    } else if (id == "topcolor") {
      document.querySelector(".topcolorText").textContent =
        document.getElementById("inputColor").value;
      box.forEach((x) => (x.style.border = "1px solid transparent"));
      box1.forEach((x) => (x.style.border = "1px solid transparent"));
      primeColor = " ";
      secondColor = " ";
    }
  }
});

document.querySelector(".done").addEventListener("click", function () {


  let u = [];
  items.forEach(function (x) {
    if (x.style.border == "1px solid rgb(13, 110, 253)") {
      const id = x.getAttribute("id");
      u.push(id);
    }
  });

  let colorPicker = [
    document.querySelector(".maincolorText").textContent,
    document.querySelector(".bicolorText").textContent,
    document.querySelector(".topcolorText").textContent,
  ];

  const end = [];
  colorPicker.forEach(function (x) {
    if (x.length > 1) {
      end.push(x);
    }
  });

  box.forEach((x) => (x.style.border = "1px solid transparent"));
  box1.forEach((x) => (x.style.border = "1px solid transparent"));
  items.forEach((x) => (x.style.border = "1px solid transparent"));
  document.getElementById(`multi`).style.background = "#6C757D";
  document.getElementById(`multi`).style.border = "#6C757D";
  document.getElementById(`single`).style.background = "#6C757D";
  document.getElementById(`single`).style.border = "#6C757D";
  document.querySelector(".maincolorText").textContent = " ";
  document.querySelector(".bicolorText").textContent = " ";
  document.querySelector(".topcolorText").textContent = " ";

  if (active == "multi" && i.length >= 1) {
    const multi = [...u];
    finalContent.textContent=`Le auto con id ${multi} sono  ${primeColor} ${secondColor}`;
    active = "null";
    secondColor = " ";
    primeColor = " ";
    console.log(...multi);
    
    results();
  } else if (active == "single" && i.length >= 1) {
    if (
      colorPicker[0].length > 2 ||
      colorPicker[1].length > 2 ||
      colorPicker[2].length > 2
    ) {
      finalContent.textContent=`La auto con id ${i} a il colore  ${end}`;
      results();
    } else if (primeColor.length>2 || secondColor.length>2){
      finalContent.textContent=`La auto con id ${i} a il colore  ${primeColor} ${secondColor}`;
      results();
      secondColor = " ";
      primeColor = " ";

    }

  }
});
