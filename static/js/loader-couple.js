

//script handling view for lead time during next page load
{

function startSpinner() {
  // Show the loader element:
  document.getElementById("loaderpouch").style.display = "flex";
}

// Attach event listeners to elements with the class "loaderbutton": 
document.querySelectorAll(".loaderbutton").forEach(El => {
  El.addEventListener("click", startSpinner);
  El.addEventListener("submit", startSpinner);
});


}



{

//functio to remove loader
function removeLoader() {
  
  if (localStorage.getItem("changeofname.ng_loader")) {
    // Hide the loader if it was previously displayed
    document.getElementById("loaderpouch").style.display = "none";
  } else {
    // error hanle
   console.error("Loaderpouch element has not been activated though it exists in the DOM. no action is required");
  }
}

//function to fade out loader on page load
function fadeOutLoaderFemme() {
  const loader = document.getElementById("loaderpouchfemme");
        loader.classList.add("loaderpouch-hidden");
        loader.addEventListener("transitionend", () => {
            loader.classList.add("loaderpouch-hidden");
            
        });
}

//function to store a variable for deciding if loader should be removed and actual loader removal
function storeAndRemoveLoader() {
  // Implement fadein logic here
  localStorage.setItem("changeofname.ng_loader", "true");
  // Hide the loader before unloading
  document.getElementById("loaderpouch").style.display = "none";
}

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


// Add event listeners to the window to listen for apllicable events

window.addEventListener('load', () => {
  fadeOutLoaderFemme();
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