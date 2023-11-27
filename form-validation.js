    const form  = document.getElementsByTagName('form')[0];
    const email = document.getElementById('email');
    const emailError = document.querySelector('#email + span.error');

    email.addEventListener('input', function (event) {
      
      if (email.validity.valid) {
        emailError.innerHTML = ''; 
        emailError.className = 'error'; 
      } else {
        showError();
      }
    });

    form.addEventListener('submit', function (event) {
      if(!email.validity.valid) {
        showError();
        event.preventDefault();
      }
    });

    function showError() {
      if(email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an e-mail address.';
      } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
      }
      emailError.className = 'error active';
    }
