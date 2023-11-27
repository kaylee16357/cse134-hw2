let area = document.getElementById('comments'); 
let char = document.getElementById('char'); 


area.addEventListener('input', function () { 
    let content = this.value; 

    if(content == 250) {
       char.style.color = 'red';
       char.textContent = 'Error' + '250 - content.length'; 
    }
    if (content >= 230 {
       char.style.color = 'red';
       char.textContent = 250 - content.length;   
    }
    else {
      char.textContent = 250 - content.length;
    }
   
    content.trim(); 
    console.log(content);  
  

});
