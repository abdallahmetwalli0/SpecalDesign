// Check If Thre's Local Storage Color OPtion
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);

  //Remove  Active ClassFrom All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    //  Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      //  Add Active Class
      element.classList.add("active");
    }
  });
}

// Random BAckground Option
let backgroundOption = true;
// Variable To Control The Background Interval
let backgroundInterval;
//Check IFThere's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Is Not Empty
if (backgroundLocalItem !== null) {
  console.log(backgroundLocalItem);
  console.log(typeof backgroundLocalItem);

  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "false") {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  }
}

// Toggle spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotat On Self
  this.classList.toggle("fa-spin");
  // Toggle Class Fa-spin For Rotat
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  // Click On Every LIst Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // Remove Active Class From All Childerns
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active Class On Self
    e.target.classList.add("active");
  });
});
// Switch Random Backgrounds Opton
const randombackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All List Items
randombackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All Childerns
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// function To Random Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 10000);
  }
}

randomizeImgs();
