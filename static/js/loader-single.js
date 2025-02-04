


{
//function to display loader on page navigation to next page and form submission.
function startSpinner() {
  // Show the loader element:
  document.getElementById("loaderpouch").style.display = "flex";
}

// display loader when form with class loaderform is submitted
document.querySelector(".reprintform").addEventListener("submit", startSpinner);


// Attach event listeners for forms with the class "loaderform"
document.querySelectorAll(".formcontact").forEach(form => {
  form.addEventListener("submit", startSpinner);
});

// display loader when any element with class loaderbutton is clicked
document.querySelectorAll(".loaderbutton").forEach(El => {
  El.addEventListener("click", startSpinner);
  El.addEventListener("submit", startSpinner);
});


}








{
// Function to store scroll position, handling potential sessionStorage errors
function storeScrollPosition() {
  try {
    sessionStorage.setItem(`scrollPosition-${window.location.pathname}`, window.scrollY);
  } catch (error) {
    console.error("Error storing scroll position:", error); // Handle error gracefully
  }
}

// Function to restore scroll position, handling potential errors and clearing storage
function restoreScrollPosition() {
  const currentPagePath = window.location.pathname;
  const storedScrollPositionKey = `scrollPosition-${currentPagePath}`;
  try {
    const storedScrollPosition = sessionStorage.getItem(storedScrollPositionKey);
    if (storedScrollPosition) {
      window.scrollTo(0, storedScrollPosition);
      sessionStorage.removeItem(storedScrollPositionKey); // Clear storage for next use
    }
  } catch (error) {
    console.error("Error restoring scroll position:", error); // Handle error gracefully
  }
}

// Function to remove loader
function removeLoader() {
  // Implement fadeaway logic here
  if (localStorage.getItem("changeofname.ng_loader")) {
    // Hide the loader if it was previously displayed
    document.getElementById("loaderpouch").style.display = "none";
  } else {
    // error hanle
   console.error("Loaderpouch element has not been activated though it exists in the DOM. no action is required");
  }
}

function storeAndRemoveLoader() {
  // Implement fadein logic here
  localStorage.setItem("changeofname.ng_loader", "true");
  // Hide the loader before unloading
  document.getElementById("loaderpouch").style.display = "none";
}

// Add event listeners to the window to listen for apllicable events

window.addEventListener('load', () => {
  removeLoader();
});


window.addEventListener('beforeunload', () => {
  storeScrollPosition();
  storeAndRemoveLoader();
});


window.addEventListener('popstate', () => {
  restoreScrollPosition();
  removeLoader();
});



}



