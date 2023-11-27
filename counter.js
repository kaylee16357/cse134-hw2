let area = document.getElementById('comments'); 
let char = document.getElementById('char'); 


area.addEventListener('input', function () { 
  
    let content = this.value; 
    char.textContent = 250 - content.length;   
    content.trim(); 
    console.log(content);  
  

});
