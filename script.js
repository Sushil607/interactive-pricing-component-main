/**
 * ! Function for changing pageviews value with slider
 * **/

const slider = document.getElementById("myRange");
const pageViews = document.getElementById("pageViews");
const perMonth = document.getElementById("perMonth");
const perYearContainer = document.getElementsByClassName("per-year")[0];
const perYear = document.getElementById("perYear");

// Initial value
pageViews.innerHTML = "100K";
let billingMode = "monthly";

slider.addEventListener("change", changePageViews);

function changePageViews() {
  const pageViewsArray = ["10K", "50K", "100K", "500K", "1M"];
  const monthlyModeBilling = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
  const yearlyModeBilling = ["$6.00", "$9.00", "$12.00", "$18.00", "$27.00"];
  pageViews.innerHTML = pageViewsArray[slider.value - 1];
  if (billingMode === "monthly") {
    perMonth.innerHTML = monthlyModeBilling[slider.value - 1];
    return;
  }
  if (billingMode === "yearly") {
    const perYearBilling = ["$72", "$108", "$144", "$216", "$324"];
    perMonth.innerHTML = yearlyModeBilling[slider.value - 1];
    perYear.innerHTML = perYearBilling[slider.value - 1];
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
    perYearContainer.style.cssText = "display:none";
    changePageViews();
    return;
  }

  if (toggleBtn.classList.contains("right")) {
    billingMode = "yearly";
    perYearContainer.style.cssText = "display:flex";
    changePageViews();
    return;
  }
});
