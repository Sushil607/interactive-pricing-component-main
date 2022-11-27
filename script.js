/**
 * ! Function for changing pageviews value with slider
 * **/

const slider = document.getElementById("myRange");
const pageViews = document.getElementById("pageViews");
const perMonth = document.getElementById("perMonth");

let billingMode = "monthly";

// Initial value
pageViews.innerHTML = "100K";

slider.addEventListener("change", changePageViews);

function changePageViews() {
  const pageViewsArray = ["10K", "50K", "100K", "500K", "1M"];
  const monthlyModeBilling = ["$8", "$12", "$16", "$24", "$36"];
  const yearlyModeBilling = ["$6", "$9", "$12", "$18", "$27"];
  pageViews.innerHTML = pageViewsArray[slider.value - 1];
  if (billingMode === "monthly") {
    console.log("monthly");
    perMonth.innerHTML = monthlyModeBilling[slider.value - 1];
    return;
  }
  if (billingMode === "yearly") {
    console.log("yearly");
    perMonth.innerHTML = yearlyModeBilling[slider.value - 1];
    return;
  }
}

/**
 * ! Function for changing slider bg
 * **/

slider.addEventListener("input", () => {
  var x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  var color = `linear-gradient(90deg,hsl(174, 77%, 80%) ${x}%,hsl(224, 65%, 95%) ${x}%)`;
  slider.style.cssText = `background:${color}`;
});

/**
 * ! Function for toggling billing mode
 * **/

const toggleContainer = document.getElementsByClassName("toggle-container")[0];
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];

toggleContainer.addEventListener("click", () => {
  toggleBtn.classList.toggle("left");
  toggleBtn.classList.toggle("right");

  // Change billing mode based on class
  if (toggleBtn.classList.contains("left")) {
    billingMode = "monthly";
    changePageViews();
    return;
  }

  if (toggleBtn.classList.contains("right")) {
    billingMode = "yearly";
    changePageViews();
    return;
  }
});
