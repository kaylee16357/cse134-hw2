let area = document.getElementById('comments'); 
let char = document.getElementById('char'); 
let text = document.getElementById('counter');

function changeColor(count) {
  if(count >= 230){
    text.style.color = 'red';
  }
  if(count >= 250){
    text.style.color = 'red';
    text.textContent = 'Error: over 250 characters';
  }

}


area.addEventListener('input', function () { 
  
    let content = this.value; 
    char.textContent = 250 - content.length; 
    changeColor(content);

    content.trim(); 
    console.log(content); 

});
