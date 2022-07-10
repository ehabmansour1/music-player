let playPause = document.querySelector(".playpause");
let songName = document.querySelector(".name");
let author = document.querySelector(".author");
let img = document.querySelector("img");
let player = document.querySelector("audio");
let forward = document.querySelector(".fa-forward-step");
let backward = document.querySelector(".fa-backward-step");
let progressBar = document.querySelector(".progress");
function seeking() {
  let arr = [];
  let counter = 0;
  let seeking = setInterval(() => {
    arr.push(player.currentTime.toFixed());
    console.log(arr);
    console.log(player.currentTime.toFixed());
    if (arr[counter] === arr[counter - 1]) {
      clearInterval(seeking);
    }
    counter++;
    let width =
      (player.currentTime.toFixed() / player.duration.toFixed()) * 100;
    progressBar.style.width = width + "%";
  }, 1000);
}
function play() {
  player.play();
  playPause.classList.replace("fa-circle-play", "fa-circle-pause");
  seeking();
}
function pause() {
  player.pause();
  playPause.classList.replace("fa-circle-pause", "fa-circle-play");
}
playPause.onclick = function () {
  if (playPause.classList.contains("fa-circle-play")) {
    play();
  } else {
    pause();
  }
};
let music0 = ["Shitan", "Abysif, Ismail Nosrat", "img1.jpg", "music1.mp3"];
let music1 = ["BATAL 3ALAM", "MARWAN MOUSSA", "img2.jpg", "music2.mp3"];
let allMusic = [music0, music1];
let i = 0;
function choose() {
  songName.innerHTML = allMusic[i][0];
  author.innerHTML = allMusic[i][1];
  img.src = `images/${allMusic[i][2]}`;
  player.src = `mp3/${allMusic[i][3]}`;
}
choose();
forward.onclick = function () {
  if (i < allMusic.length - 1) {
    i++;
    choose();
    console.log(i);
  } else {
    console.log(i);
  }
  play();
};
backward.onclick = function () {
  if (i !== 0) {
    i--;
    choose();
    console.log(i);
  } else {
    console.log(i);
  }
  play();
};
function seekNow() {
  let arr = [];
  let counter = 0;
  arr.push(player.currentTime.toFixed());
  console.log(arr);
  console.log(player.currentTime.toFixed());
  if (arr[counter] === arr[counter - 1]) {
    clearInterval(seeking);
  }
  counter++;
  let width = (player.currentTime.toFixed() / player.duration.toFixed()) * 100;
  progressBar.style.width = width + "%";
}
let progressHolder = document.querySelector(".progress-holder");
progressHolder.onclick = function (event) {
  console.log(event.clientX);
  let clickPlace = event.clientX / (window.innerWidth - 20);
  console.log(clickPlace);
  player.currentTime = clickPlace * player.duration;
  seekNow();
};
