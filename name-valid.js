const form  = document.getElementsByTagName('form')[0];
const name = document.getElementById('name'); 
const nameError = document.querySelector('#name + span.error');


    name.addEventListener('input', function (e) {
      if (name.validity.valid) {
        nameError.innerHTML = ''; 
        nameError.className = 'error'; 
      } else {
        nameError();
      }
    });

    form.addEventListener('submit', function (e) {
      if(!name.validity.valid) {
        nameError();
        e.preventDefault();
      }
    });

    function nameError() {
      if(name.validity.valueMissing) {
        nameError.textContent = 'Please input your name.';
      } else if(name.validity.tooShort) {
        nameError.textContent = 'Email should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
      }
      nameError.className = 'error active';
    }
