
window.onload = function(){


  var button = document.getElementById('button');
  button.addEventListener('click', () => {

  

  var list = document.getElementById('list');


  var list_item = document.createElement('li');
  list_item.innerHTML = document.getElementById('input').value;

  list.appendChild(list_item);

  });









}
