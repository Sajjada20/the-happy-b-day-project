document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorText = document.getElementById("error");
  
    // Show the popup
    popup.style.visibility = 'visible';

  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      const gebruiksNaam = 'elham299'
      const wachtwoord = 'ikbenjarig9229'
      
  
      if (username === gebruiksNaam && password === wachtwoord) {
        alert("Gelukt");
        popup.style.visibility = 'hidden';  // Close the popup on success
      } else {
        errorText.textContent = "Incorrect username or password";
      }
    });
  });
  