var button = document.querySelector('#button');

function onHover(event) {
  var x = event.pageX - button.offsetLeft - button.offsetParent.offsetLeft;
  var y = event.pageY - button.offsetTop - button.offsetParent.offsetTop;
  button.style.setProperty('--x', x + 'px');
  button.style.setProperty('--y', y + 'px');
  console.log('hello there');
}

function init() {
  button.addEventListener('mousemove', onHover);
}

init();