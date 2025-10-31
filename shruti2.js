document.getElementById("surpriseBtn").addEventListener("click", function () {
  const surprise = document.getElementById("surprise");
  const song = document.getElementById("song");

  if (surprise.classList.contains("hidden")) {
    surprise.classList.remove("hidden");
    song.play();
  } else {
    surprise.classList.add("hidden");
    song.pause();
    song.currentTime = 0;
  }
});