//  Lightbox 1 //
const about_video = document.querySelector(".about_video");
const lightbox = document.querySelector(".lightbox");
const lightbox_content = document.querySelector(".lightbox_content");

about_video.addEventListener("click", (e) => {
  lightbox.classList.add("lightbox_show");
});

lightbox.addEventListener("click", (e) => {
  lightbox.classList.remove("lightbox_show");
});

lightbox_content.addEventListener("click", (e) => {
  e.stopPropagation();
});

// LightBox 2///
const allImg = document.querySelectorAll(".inner_img ");
const popup = document.querySelector(".popup");
const popup_img = document.querySelector(".popup_img");
const overlay = document.querySelector(".overlay");
let captionText = document.getElementById("caption");
console.log(allImg);

//Loop thoruge all image
allImg.forEach((img) => {
  // listing click event
  img.addEventListener("click", () => {
    // Get Images Src
    popup_img.src = img.src;
    tempImg = img.src;
    captionText.innerText = img.alt;
    openModal();
  });

  // Remove Our Overlay And Popup
  overlay.addEventListener("click", () => {
    captionText;
    closeModal();
  });
});

// Loop thoruge all image
allImg.forEach((img) => {
  // listing keypress event
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      // listing click event
      // Get Images Src
      popup_img.src = img.src;
      tempImg = img.src;
      openModal();
    }
  });

  // remove keydown event
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      captionText.innerText = img.alt;
      closeModal();
    }
  });
});

// Open Model Function
const openModal = function () {
  // Add ACtive Class in popup
  popup.classList.add("active");
  // Add ACtive Class in overlay
  overlay.classList.add("active");
  popup1.classList.add("active");
  // Add ACtive Class in overlay
  overlay1.classList.add("active");
};

// Close Model Function
const closeModal = function () {
  //  Remove ACtive Class in popup
  popup.classList.remove("active");
  // remove ACtive Class in overlay
  overlay.classList.remove("active");
  // popup1.classList.remove("active");
  // // remove ACtive Class in overlay
  // overlay1.classList.remove("active");
};

// Lightbox 3 //

const allImg1 = document.querySelectorAll("img.my_Img ");
const popup1 = document.querySelector(".popup1");
const popup_img1 = document.querySelector(".popup_img1");
const overlay1 = document.querySelector(".overlay1");
// let captionText1 = document.getElementById("caption1");

allImg1.forEach((img) => {
  img.addEventListener("click", () => {
    popup_img1.src = img.src;
    tempImg = img.src;
    // captionText1.innerText = img.alt;
    openModal();
  });

  // Remove Our Overlay And Popup
  overlay1.addEventListener("click", () => {
    // captionText1;
    closeModal();
  });
});

// Loop thoruge all image
allImg1.forEach((img) => {
  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      popup_img1.src = img.src;
      tempImg = img.src;
      openModal();
    }
  });

  // remove keydown event
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // captionText1.innerText = img.alt;
      closeModal();
    }
  });
});

overlay1.addEventListener("click", (e) => {
  overlay1.classList.remove("active");
  popup1.classList.remove("active");
});
