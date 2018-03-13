// keycode: sound
corr = {
  65: 'clap',
  83: 'hihat',
  68: 'kick',
  70: 'openhat',
  71: 'boom',
  72: 'ride',
  74: 'snare',
  75: 'tom',
  76: 'tink'
}

keys = document.querySelectorAll(".key");
audios = document.querySelectorAll("audio");

// all of this happens on keydown
document.addEventListener("keydown", function(e) {
  if (e.keyCode in corr) {
    // loop through audio elements, resetting the file
    // and playing it, if the key matches
    audios.forEach(a => {
      if (a.dataset.key == e.keyCode) {
        a.currentTime = 0;
        a.play();
      }
    })

    // loop through keys, starting transition where necessary
    keys.forEach(k => {
      if (k.dataset.key == e.keyCode) {
        k.classList.add('playing');
      }
    })

    // make sure the style change gets removed after transition ends
    function removeTransition(e) {
      if(e.propertyName !== 'transform') return;
      this.classList.remove('playing');
    }

    // add event listeners to each key
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  }
})
