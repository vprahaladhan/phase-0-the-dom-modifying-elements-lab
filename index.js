// Write your code here!
document.getElementById('main').remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Prahal is the champion";
document.body.appendChild(newHeader);