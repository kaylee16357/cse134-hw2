    const form  = document.getElementsByTagName('form')[0];
    const email = document.getElementById('email');
    const name = document.getElementById('name');
    const emailError = document.querySelector('#email + span.error');
    const nameError = document.querySelector('#name + span.error');

    email.addEventListener('input', function (e) {
      
      if (email.validity.valid) {
        emailError.innerHTML = ''; 
        emailError.className = 'error'; 
      } else {
        emailError();
      }
    });

 name.addEventListener('input', function (e) {
      
      if (name.validity.valid) {
        nameError.innerHTML = ''; 
        nameError.className = 'error'; 
      } else {
        nameError();
      }
    });

    form.addEventListener('submit', function (e) {
      if(!email.validity.valid) {
        emailError();
        e.preventDefault();
      }
    });

    function emailError() {
      if(email.validity.valueMissing) {
        emailError.textContent = 'Please input an e-mail address.';
      } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Entered value is not an email';
      }
      emailError.className = 'error active';
    }

 function nameError() {
      if(name.validity.valueMissing) {
        nameError.textContent = 'Please input your name.';
      } else if(name.validity.tooShort) {
        nameError.textContent = `Name should be at least ${ name.minLength } characters, you entered ${ name.value.length }.`;
      }
     
      emailError.className = 'error active';
      nameError.className = 'error active';
    }
