// Check IF Thers's local StorOpage Color Option 
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  //
  console.log("Local Storage Is Empty you can set It on Root Now");
  console.log(localStorage.getItem("color_option"));
  // Set Color On Root
  document.documentElement.style.setProperty("--main-color", mainColors);
  // Remove class Active
  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");
    // Add class Active
    if (mainColors === element.dataset.color ){
      element.classList.add("active")
    }
  });
};


// Start Toggle Spin class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin for Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class
  document.querySelector(".settings-box").classList.toggle("open");
};
// End Toggle Spin class On Icon
// Start Option Colors
const colorsLi = document.querySelectorAll(".colors-list li");
// Loop On List Lis
colorsLi.forEach(li => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    
    // Set Color On Root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // Remove ACtive Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
      element.classList.remove("active");
    });
    // Add cLASS on Self
    e.target.classList.add("active")
  })
});
// End Option Colors
// Start Select Landing Page Elemant
// Change Bacground Image Url

let landingPage = document.querySelector(".landing-page");

// Get Arry Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Change Background Imgs url

setInterval(() => {
  let randomIamgs = Math.floor(Math.random() * imgsArray.length);

  landingPage.style.background = 'url("imgs/' + imgsArray[randomIamgs] + '")';
}, 10000);

// End Select Landing Page Elemant
