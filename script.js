(function() {

  var muted = false;
  var sounds = [];
  for(var i = 1; i < 19; i++) {
    var sound = new Audio('hits/' + i + '.ogg');
    sounds.push(sound);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.onkeydown = function(e) {
    if(muted) {
      return;
    }

    sounds[getRandomInt(0, sounds.length - 1)].play();
  }

  document.getElementById('mute-btn').addEventListener('click', function(e) {
    muted = !muted;
    if(muted) {
      e.target.style.backgroundColor = 'red';
    } else {
      e.target.style.backgroundColor = '';
    }
  });

})()