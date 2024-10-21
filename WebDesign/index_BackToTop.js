// Function to return the page to the beginning
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Show or hide the scroll to top button based on page position
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (window.scrollY > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  }