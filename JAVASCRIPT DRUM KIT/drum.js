// JavaScript Drum Kit App

{
  const playingClass = "playing",
    crashRide = document.getElementById("crash-ride"),
    hiHatTop = document.getElementById("hihat-top");

  // animation
  const animateCrashOrRide = () => {
    crashRide.style.transform = "rotate(0deg) scale(1.5)";
  };
  const animateHiHatClosed = () => {
    hiHatTop.style.top = "171px";
  };
  const removeCrashOrRide = (e) => {
    if (e.propertyName != "transform") {
      return;
    }

    e.target.style.transform = "rotate(-7.2deg) scale(1.5)";
  };
  const removeHiHatClosed = (e) => {
    if (e.propertyName != "top") {
      return;
    }

    e.target.style.top = "166px";
  };

  const playSound = (e) => {
    var keyCode = e.keyCode;
    var audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    var keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!keyElement) {
      return;
    }
    audioElement.currentTime = 0;
    audioElement.play();
    keyElement.classList.add(playingClass);
    switch (keyCode) {
      case 69:
      case 82:
        animateCrashOrRide();
        break;
      case 75:
        animateHiHatClosed();
        break;
    }
  };

  const drumKeys = document.querySelectorAll(".key");

  drumKeys.forEach((key) => {
    key.addEventListener("transitionend", (e) => {
      if (e.propertyName != "transform") {
        return;
      }
      e.target.classList.remove(playingClass);
    });
  });
  crashRide.addEventListener("transitionend", removeCrashOrRide);
  hiHatTop.addEventListener("transitionend", removeHiHatClosed);

  window.addEventListener("keydown", playSound);
}
