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


 function nameError() {
      if(name.validity.valueMissing) {
        nameError.textContent = 'Please input your name.';
      } else if(name.validity.tooShort) {
        nameError.textContent = `Name should be at least ${ name.minLength } characters, you entered ${ name.value.length }.`;
      }


