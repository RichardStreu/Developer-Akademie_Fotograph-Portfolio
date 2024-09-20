// get the needed lements from DOM
const imageBox = document.getElementById("imageBox");
const popupDiv = document.getElementById("popup-div");

// create an array of all images from the imageBox
const images = imageBox.querySelectorAll("img");

// assign the click event to every image of the image array
images.forEach(element => {
  element.addEventListener("click", toggleImage);
});




function toggleImage(event) {

  // get and save the current clicked image 
  const clickedImage = this;


 
  // do a copy of the image. so it will be possible to
  // assign this image to an other DIV
  // create it with LET so it's possible to override it in a
  // few steps
  let imageCopy = clickedImage.cloneNode(true);
  imageCopy.classList.remove("portfolio-img");
  imageCopy.classList.add("default-enlarged-image");

  
  // log the current copied image to get sure everything works 
  // until this step
  // console.log("Your currently clicked 'n copied image is:");
  // console.log(imageCopy);
  


  // declare the function to show the copied Image
  function showImage() {
    
    popupDiv.classList.remove("popup-div-transparent");
    popupDiv.classList.add("z-index-plus");
    popupDiv.appendChild(imageCopy);
    console.log(imageCopy);
    popupDiv.classList.add("popup-div");



    setTimeout(() => {
      imageCopy.classList.add("enlarged-image");
    }, 10);
    imageCopy.addEventListener("click", hideImage);
  }


  function hideImage() {
    imageCopy.classList.remove("enlarged-image");
    popupDiv.classList.add("popup-div-transparent");
    imageCopy.remove();
      popupDiv.classList.remove("popup-div");
      popupDiv.classList.remove("z-index-plus");
      imageCopy = "";
  }

  showImage();

}

