    const form  = document.getElementsByTagName('form')[0];
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const emailError = document.querySelector('#email + span.error');

    email.addEventListener('input', function (e) {
      
      if (email.validity.valid) {
        emailError.innerHTML = ''; 
        emailError.className = 'error'; 
      } else {
        giveError();
      }
    });

 email.addEventListener('input', function (e) {
      
      if (email.validity.valid) {
        emailError.innerHTML = ''; 
        emailError.className = 'error'; 
      } else {
        giveError();
      }
    });

    form.addEventListener('submit', function (e) {
      if(!email.validity.valid) {
        giveError();
        e.preventDefault();
      }
    });

    function giveError() {
      if(email.validity.valueMissing) {
        emailError.textContent = 'Please input an e-mail address.';
      } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Entered value is not an email';
      }
      emailError.className = 'error active';
    }
