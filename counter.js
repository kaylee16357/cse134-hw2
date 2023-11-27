let area = document.getElementById('comments'); 
let char = document.getElementById('char'); 

function changeColor(count) {
  if(count >== 230){
    char.style.color = 'red';
  }
  if(count === 250){
    char.style.color = 'red';
    char.textContent = 'Error: max characters reached';
  }

}


area.addEventListener('input', function () { 
  
    let content = this.value; 
    char.textContent = 250 - content.length;   
    changeColor(count);
    content.trim(); 
    console.log(content);  
  

});
