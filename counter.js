let area = document.getElementById('comments'); 
let char = document.getElementById('char'); 
let text = document.getElementById('counter');

function changeColor(count) {
  if(count >== 230){
    text.style.color = 'red';
  }
  if(count === 250){
    text.style.color = 'red';
    text.textContent = 'Error: max characters reached';
  }

}


area.addEventListener('input', function () { 
  
    let content = this.value; 
    changeColor(content);
    char.textContent = 250 - content.length;   
    content.trim(); 
    console.log(content);  
  

});
