class Drumkit {
  constructor() {
    //   selecting all the audios to play initially
    this.pads = document.querySelectorAll(".pad");
    this.clapAudio = document.querySelector(".clap-sound");
    this.cowbellAudio = document.querySelector(".cowbell-sound");
    this.crashAudio = document.querySelector(".crash-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.kickAudio = document.querySelector(".kick-sound");
    this.openhatAudio = document.querySelector(".openhat-sound");
    this.percAudio = document.querySelector(".perc-sound");
    this.rideAudio = document.querySelector(".ride-sound");
    this.shakerAudio = document.querySelector(".shaker-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.selects = document.querySelectorAll("select");
    //   for tracking audio
    this.index = 0;
    //   beats per min(BPM)
    this.bpm = 150;
    //   play button
    this.playBtn = document.querySelector(".play");
    // keeping track of playing
    this.isPlaying = null;
  }

  activePad() {
    this.classList.toggle("active");
  }

  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    // adding animation and sound to each active pads
    activeBars.forEach((bar) => {
      bar.style.animation = "playTrack 0.3s alternate ease-in-out 2";

      if (bar.classList.contains("active")) {
        if (bar.classList.contains("clap-pad")) {
          this.clapAudio.currentTime = 0;
          this.clapAudio.play();
        }
        if (bar.classList.contains("cowbell-pad")) {
          this.cowbellAudio.currentTime = 0;
          this.cowbellAudio.play();
        }
        if (bar.classList.contains("crash-pad")) {
          this.crashAudio.currentTime = 0;
          this.crashAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("openhat-pad")) {
          this.openhatAudio.currentTime = 0;
          this.openhatAudio.play();
        }
        if (bar.classList.contains("perc-pad")) {
          this.percAudio.currentTime = 0;
          this.percAudio.play();
        }
        if (bar.classList.contains("ride-pad")) {
          this.rideAudio.currentTime = 0;
          this.rideAudio.play();
        }
        if (bar.classList.contains("shaker-pad")) {
          this.shakerAudio.currentTime = 0;
          this.shakerAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
      }
    });
    this.index++;
  }

  start() {
    if (!this.isPlaying) {
      const interval = (60 / this.bpm) * 1000;
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    } else {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }

  updateButton() {
    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop X";
      this.playBtn.style.backgroundImage =
        "linear-gradient(178.2deg,rgba(118, 8, 23, 1) 10.9%,rgba(158, 12, 33, 1) 62.6%)";
    } else {
      this.playBtn.innerHTML = "Play";
      this.playBtn.style.background = "#46ad64";
    }
  }

  changeSound(e) {
    let selectName = e.target.name;
    let selectValue = e.target.value;

    switch (selectName) {
      case "clap-select":
        this.clapAudio.src = selectValue;
        break;
      case "cowbell-select":
        this.cowbellAudio.src = selectValue;
        break;
      case "crash-select":
        this.crashAudio.src = selectValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectValue;
        break;
      case "kick-select":
        this.kickAudio.src = selectValue;
        break;
      case "openhat-select":
        this.openhatAudio.src = selectValue;
        break;
      case "perc-select":
        this.percAudio.src = selectValue;
        break;
      case "ride-select":
        this.rideAudio.src = selectValue;
        break;
      case "shaker-select":
        this.shakerAudio.src = selectValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectValue;
        break;
      case "tom-select":
        this.tomAudio.src = selectValue;
        break;
    }
  }
}

// class object
const drumkit = new Drumkit();

// event listeners
drumkit.pads.forEach((pad) => {
  pad.addEventListener("click", drumkit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumkit.playBtn.addEventListener("click", () => {
  drumkit.updateButton();
  drumkit.start();
});

drumkit.selects.forEach((select) => {
  select.addEventListener("change", (e) => {
    drumkit.changeSound(e);
  });
});
