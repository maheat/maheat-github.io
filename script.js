// JavaScript code in script.js

// From image slider in art.html so that when you click the images, the website doesnt scroll down
window.addEventListener("hashchange", () => {
    if (
      window.location.hash &&
      window.location.hash.startsWith("#slider-span")
    ) {
      document.getElementById("img").scrollIntoView();
    }
  });

// From video.html
function videoslider(link){
    document.querySelector(".slider").src = link;
}
   

