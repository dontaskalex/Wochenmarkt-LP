var x = document.getElementById("Wochenmarkt");
var el = document.getElementById("player");
var playlist = [
  "Wochenmarkt",
  "A Day Under The Bridge",
  "Are We There Yet",
  "2 From The Top",
  "Popcorn",
  "Bubble Tea",
  "Rocks",
  "Weather Kid",
  "The Rain Never Ends",
  "Good Day",
  "Maybe Tomorrow",
  "Standalone",
  "Tomato Sauce",
  "Sine",
  "Tiny Waves",
  "Trying To Feel",
  "Unusual",
  "All Night Long"
];
var current = 0;
var state = 0;

function initiate() {
  changeInfo();
}

function hasClass(element, cls) {
  return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
}

function nextMusic() {
  if (current < playlist.length - 1) {
    current++;
  } else {
    current = 0;
  }
  x.pause();
  x.currentTime = 0;
  x = document.getElementById(playlist[current]);
  if (state === 1) {
    x.play();
  }

  changeInfo();
}

function previousMusic() {
  if (current === 0) {
    current = playlist.length - 1;
  } else {
    current--;
  }

  x.pause();
  x.currentTime = 0;
  x = document.getElementById(playlist[current]);
  if (state === 1) {
    x.play();
  }
  changeInfo();
}

function changeInfo() {
  document.getElementById("artist").innerHTML = "dontaskalex";
  document.getElementById("album").innerHTML = "Wochenmarkt LP";
  document.getElementById("song").innerHTML = playlist[current];
}

(function ($) {
  $(document).ready(function () {
    // Pause/Play functionality
    var playButton = $(".control-play"),
      album = $(".album");

    playButton.on("click", function () {
      if (state === 0) {
        x.play();
        state = 1;
      } else {
        x.pause();
        state = 0;
      }
      $(".music-player-container").toggleClass("is-playing");
    });
  });
})(jQuery);
