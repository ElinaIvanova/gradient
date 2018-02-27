var button = document.querySelector('#button');

function onHover(event) {
  var x = event.pageX - button.offsetLeft - button.offsetParent.offsetLeft;
  var y = event.pageY - button.offsetTop - button.offsetParent.offsetTop;
  button.style.setProperty('--x', x + 'px');
  button.style.setProperty('--y', y + 'px');
  console.log('hello there');
}

function onOrientationChange() {
  console.log(screen.orientation);
}

function onResize() {
  console.log(screen.width, screen.height);
}

function init() {
  button.addEventListener('mousemove', onHover);

  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onOrientationChange);
}

init();
