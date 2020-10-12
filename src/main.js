'use strict';

const square = document.querySelector('.square');

const rotateCub = () => {
  square.classList.toggle('rotate');
};

square.addEventListener('click', rotateCub);

function onReady(callback) {
  const intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.square`', true);
  setVisible('.loader', false);
});
