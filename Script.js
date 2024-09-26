const dropBtn = document.querySelector('.drop-btn');
const dropdownMenu = document.querySelector('.offscreen-dropdown-menu');
const dropdownList = document.querySelector('.offscreen-dropdown-list');
const dropdownarrow = document.getElementById("header-arrow");

dropBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('offscreen-dropdown-menu-show');
  dropdownList.classList.toggle('offscreen-dropdown-list-show');
});

dropBtn.addEventListener('click', function(){
  if (dropdownarrow.src.endsWith('arrow-down.svg')){
    dropdownarrow.src = 'Img/arrow-up.svg'
  } else{
    dropdownarrow.src = 'Img/arrow-down.svg'
  }
});

document.querySelector('.drop-btn').addEventListener('click', function() {
  this.blur();
});