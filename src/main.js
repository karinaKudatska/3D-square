'use strict';

const square = document.querySelector('.square');

const rotateCub = () => {
  square.classList.toggle('rotate');
};

square.addEventListener('click', rotateCub);
