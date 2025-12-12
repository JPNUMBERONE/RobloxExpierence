// call this function when "orange-kid" is clicked
let currentAudio = null;
let soundQueue = []; // will hold a shuffled list of sounds

const soundFiles = [
  "images/Sounds/oof.mp3",
  "images/Sounds/nom.mp3",
  "images/Sounds/scary2.mp3",
  "images/Sounds/gg.mp3",
  "images/Sounds/cola.mp3",
  "images/Sounds/boom.mp3",
  "images/Sounds/mmm.mp3",
  "images/Sounds/speed.mp3",
  "images/Sounds/sword.mp3",
  "images/Sounds/gravity.mp3",
  "images/Sounds/pizza.mp3",
];

function playRandomSound() {
  const randomNumber = Math.floor(Math.random() * 13);
  console.log(randomNumber);
  if (randomNumber == 1) {
    document.getElementById("oof").play();
  } else if (randomNumber == 2) {
    document.getElementById("nom").play();
  } else if (randomNumber == 3) {
    document.getElementById("scary").play();
  } else if (randomNumber == 4) {
    document.getElementById("gg").play();
  } else if (randomNumber == 5) {
    document.getElementById("boom").play();
  } else if (randomNumber == 6) {
    document.getElementById("cola").play();
  } else if (randomNumber == 7) {
    document.getElementById("gravity").play();
  } else if (randomNumber == 8) {
    document.getElementById("mmm").play();
  } else if (randomNumber == 9) {
    document.getElementById("pizza").play();
  } else if (randomNumber == 10) {
    document.getElementById("speed").play();
  } else if (randomNumber == 11) {
    document.getElementById("sword").play();
  }
}

// Fisher–Yates shuffle
function shuffleArray(array) {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function playRandomSound2() {
  // stop previous sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // If queue is empty, reshuffle
  if (soundQueue.length === 0) {
    soundQueue = shuffleArray(soundFiles);
  }

  // Take the next sound from the queue
  const nextSound = soundQueue.shift();

  currentAudio = new Audio(nextSound);
  currentAudio.play();
}

function remove() {
  document.getElementById("video-container").classList.remove("hide");
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/ui3WGEX2pno?si=fqsNpOundxTBCQ1E&amp;controls=0";
  //document.getElementById("free").classList.add("hide");
  document.getElementById("boop").play();
  document.getElementById("info").classList.add("hide");
  document.getElementById("text1").classList.remove("hide");
  //document.getElementById("ndsvid").classList.remove("hide");
  //document.getElementById("tuff").classList.add("hide");
  //document.getElementById("floodvid").classList.add("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
  //document.getElementById("speedrunvid").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
  //document.getElementById("jailvid").classList.add("hide");
}
function remove2() {
  document.getElementById("video-container").classList.remove("hide");
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/vR8D9fsmoxU?si=R7JcmF31D185jfsD&amp;controls=0";
  //document.getElementById("free").classList.add("hide");
  document.getElementById("boop").play();
  document.getElementById("info2").classList.add("hide");
  document.getElementById("text2").classList.remove("hide");
  //document.getElementById("floodvid").classList.remove("hide");
  //document.getElementById("tuff").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  // document.getElementById("ndsvid").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
  //document.getElementById("speedrunvid").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
  // document.getElementById("jailvid").classList.add("hide");
}
function remove3() {
  document.getElementById("video-container").classList.remove("hide");
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/FtXON4WbUCM?si=-Y_tF-rWvD-F453y&amp;controls=0";
  // document
  // .getElementById("free")
  //.classList.add("hide");
  document.getElementById("boop").play();
  document.getElementById("info3").classList.add("hide");
  document.getElementById("text3").classList.remove("hide");
  // document.getElementById("jailvid").classList.remove("hide");
  //document.getElementById("floodvid").classList.add("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  //document.getElementById("tuff").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  //document.getElementById("ndsvid").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
  //document.getElementById("speedrunvid").classList.add("hide");
}
function remove4() {
  document.getElementById("video-container").classList.remove("hide");
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/TUxDy88VCKY?si=WF87L3aebUVWi8oF&amp;controls=0";
  //document
  //.getElementById("free")
  //.classList.add("hide");
  document.getElementById("boop").play();
  document.getElementById("info4").classList.add("hide");
  document.getElementById("text4").classList.remove("hide");
  // document.getElementById("jailvid").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
  //document.getElementById("speedrunvid").classList.remove("hide");
  // document.getElementById("tuff").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  //document.getElementById("ndsvid").classList.add("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  //document.getElementById("floodvid").classList.add("hide");
}
function removeall() {
  playRandomSound();
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/3y3MdGrgOCA?si=Q4GbeH2RCwT0cr4z";
  //document.getElementById("free").classList.add("hide");
  document.getElementById("info").classList.remove("hide");
  document.getElementById("text1").classList.add("hide");
  document.getElementById("info2").classList.remove("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("info3").classList.remove("hide");
  document.getElementById("text3").classList.add("hide");
  document.getElementById("info4").classList.remove("hide");
  document.getElementById("text4").classList.add("hide");
  //document.getElementById("speedrunvid").classList.add("hide");
  //document.getElementById("floodvid").classList.add("hide");
  //document.getElementById("ndsvid").classList.add("hide");
  //document.getElementById("jailvid").classList.add("hide");
  //document.getElementById("tuff").classList.remove("hide");
}
function trailer() {
  document.getElementById("video-container").classList.remove("hide");
  document.getElementById("video-container").src =
    "https://www.youtube.com/embed/3y3MdGrgOCA?si=zrMt35yRfpFkax2E&amp;controls=0";
  document.getElementById("boop").play();
  //document.getElementById("tuff").classList.add("hide");
  //document.getElementById("free").classList.remove("hide");
}
