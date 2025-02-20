document.addEventListener('DOMContentLoaded', function () {
  // Load header and footer dynamically
  Promise.all([
    fetch('header.html').then(response => response.text()),
    fetch('footer.html').then(response => response.text())
  ]).then(([headerData, footerData]) => {
    // Inject header and footer into the page
    document.getElementById('header').innerHTML = headerData;
    document.getElementById('footer').innerHTML = footerData;

    // Now, set up the event listeners
    // Dark Mode Toggle
    document.getElementById("modeToggle").addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  
    // Modal toggle
    document.querySelector(".loginbutton1").addEventListener("click", function () {
      document.getElementById("id01").style.display = "block";
    });
  
    // Close the login modal when clicking the "X" button
    document.querySelector(".close").addEventListener("click", function () {
      document.getElementById("id01").style.display = "none";
    });
  
    // Close the modal when clicking outside of it
    window.onclick = function (event) {
      if (event.target == document.getElementById("id01")) {
        document.getElementById("id01").style.display = "none";
      }
    };
  
    // Switch between Sign-In and Sign-Up forms
    document.getElementById("signUp").addEventListener("click", function () {
      document.querySelector('.sign-in').style.display = 'none';
      document.querySelector('.sign-up').style.display = 'block';
      document.querySelector('.overlay-container').classList.add('right-panel-active');
    });
  
    document.getElementById("signIn").addEventListener("click", function () {
      document.querySelector('.sign-up').style.display = 'none';
      document.querySelector('.sign-in').style.display = 'block';
      document.querySelector('.overlay-container').classList.remove('right-panel-active');
    });
});
});
