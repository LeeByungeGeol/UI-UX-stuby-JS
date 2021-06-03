window.addEventListener("load", function () {
  const myVideo = document.querySelector("#myvideo"),
    playPause = document.querySelector(".play");

  playPause.addEventListener("click", function () {
    if (myVideo.paused) {
      myVideo.play();
      this.src = "images/pause.png";
    } else {
      myVideo.pause();
      this.src = "images/play.png";
    }
  });
});
