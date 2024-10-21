function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let correct = 1;
    
    if (name == "" || email == "" || message == "") {
      alert("Please fill in all fields.");
      correct = 0;
      return false;
    }
  
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      correct = 0;
      return false;
    }
  
    if (message.length < 10) {
      alert("Please enter a longer message. Minimum length is 10 characters.");
      correct = 0;
      return false;
    }
  
    if(correct == 1 ){
      alert("Success! Your message has been sent.");
    }
  
    return true;
  }