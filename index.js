var button = document.querySelector('#button');
var main = document.querySelector('#main');

function onHover(event) {
  var x = event.pageX - button.offsetLeft - button.offsetParent.offsetLeft;
  var y = event.pageY - button.offsetTop - button.offsetParent.offsetTop;
  button.style.setProperty('--x', x + 'px');
  button.style.setProperty('--y', y + 'px');
}

function match() {
  var portrait = window.matchMedia("(orientation: portrait)");
  var width = window.innerWidth;

  if(portrait.matches && width < 700) {  
    // Portrait orientation
    main.classList.remove('landscape-orientation');
    main.classList.add('portrait-orientation');
  } else if (!(portrait.matches) && width < 700) {  
    // Landscape orientation
    main.classList.remove('portrait-orientation');
    main.classList.add('landscape-orientation');
  } else {
    main.classList.remove('portrait-orientation');
    main.classList.remove('landscape-orientation');
  }
}

function onResize() {
  match();
}

function init() {
  button.addEventListener('mousemove', onHover);
  match();
  window.addEventListener('resize', onResize);
}

init();
