let area = document.getElementById('comments'); 
let char = document.getElementById('char'); 
  
area.addEventListener('input', function () { 
  
    let content = this.value; 
    char.textContent = 250 - content.length; 

    content.trim(); 
    console.log(content); 

    if char.textContent <= 20 {
      char.style.color = 'red';
    }

});
