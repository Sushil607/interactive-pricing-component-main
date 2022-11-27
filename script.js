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
