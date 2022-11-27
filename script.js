/**
 * ! Function for changing pageviews value with slider
 * **/

const slider = document.getElementById("myRange");
const pageViews = document.getElementById("pageViews");

// Initial value
pageViews.innerHTML = "100K";

slider.addEventListener("change", changePageViews);

function changePageViews() {
  const pageViewsArray = ["10K", "50K", "100K", "500K", "1M"];
  pageViews.innerHTML = pageViewsArray[slider.value - 1];
}

/**
 * ! Function for changing slider bg
 * **/

slider.addEventListener("input", () => {
  var x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  var color = `linear-gradient(90deg,hsl(174, 77%, 80%) ${x}%,hsl(224, 65%, 95%) ${x}%)`;
  slider.style.cssText = `background:${color}`;
});
