const mirror = document.querySelector("#mirror");
const mirrorText = document.querySelector("#mirrorText");
const mirrorGlow = document.querySelector("#mirrorGlow");
const clock = document.querySelector("#clock");
const clockText = document.querySelector("#clockText");
const clockGlow = document.querySelector("#clockGlow");
const potion = document.querySelector("#potion");
const potionText = document.querySelector("#potionText");
const potionGlow = document.querySelector("#potionGlow");
const clockSound = document.querySelector("#clockSound");
const mirrorSound = document.querySelector("#mirrorSound");
const potionSound = document.querySelector("#potionSound");
const heartbeatSound = document.querySelector("#heartbeatSound");
const cake = document.querySelector("#cake");
const cakeText = document.querySelector("#cakeText");
const cakeGlow = document.querySelector("#cakeGlow");

//mirror interaction

mirror.addEventListener("click", () => {
  mirrorSound.components.sound.playSound();

  if (
    mirrorText.getAttribute("visible") === true ||
    mirrorText.getAttribute("visible") === "true"
  ) {
    return;
  }

  mirrorGlow.setAttribute("visible", false);

  mirrorText.setAttribute("value", "Who am I, really?");

  mirrorText.setAttribute("visible", true);

  setTimeout(() => {
    mirrorText.setAttribute(
      "value",
      "Who am I, really? \n\n The mirror offers no answer.", //adds response after 3.5 seconds
    );
  }, 3500);

  setTimeout(() => {
    mirrorText.setAttribute("visible", false);
  }, 12000);
});

//clock interaction
clock.addEventListener("click", () => {
  clockSound.components.sound.playSound();

  setTimeout(() => {
    clockSound.components.sound.stopSound();
  }, 12000);

  if (
    clockText.getAttribute("visible") === true ||
    clockText.getAttribute("visible") === "true"
  ) {
    return;
  }

  clockGlow.setAttribute("visible", false);

  clockText.setAttribute("value", "You are late.");

  clockText.setAttribute("visible", true);

  setTimeout(() => {
    clockText.setAttribute(
      "value",
      "You are late. \n\n The clock is watching you.",
    );
  }, 3500);

  setTimeout(() => {
    clockText.setAttribute("visible", false);
  }, 12000);
});

// potion interaction
potion.addEventListener("click", () => {
  if (
    potionText.getAttribute("visible") === true ||
    potionText.getAttribute("visible") === "true"
  ) {
    return;
  }

  potionGlow.setAttribute("visible", false);

  potionText.setAttribute("value", "What will happen if I drink?");

  potionText.setAttribute("visible", true);

  potionSound.components.sound.playSound();

  setTimeout(() => {
    heartbeatSound.components.sound.playSound();
  }, 600);

  setTimeout(() => {
    heartbeatSound.components.sound.stopSound();
  }, 12000);

  setTimeout(() => {
    potionText.setAttribute(
      "value",
      "What will happen if I drink?\n\nThe bottle refuses to say.",
    );
  }, 3500);

  setTimeout(() => {
    potionText.setAttribute("visible", false);
  }, 12000);
});

const ambientAudio = document.querySelector("#ambientAudio");

document.addEventListener(
  "click",
  () => {
    ambientAudio.components.sound.playSound();
  },
  { once: true },
);

//cake interaction
cake.addEventListener("click", () => {
  if (
    cakeText.getAttribute("visible") === true ||
    cakeText.getAttribute("visible") === "true"
  ) {
    return;
  }

  cakeGlow.setAttribute("visible", false);

  cakeText.setAttribute("value", "Eat me!");

  cakeText.setAttribute("visible", true);

  setTimeout(() => {
    cakeText.setAttribute(
      "value",
      "Eat me!\n\nNo one can tell you what happens next.",
    );
  }, 3500);

  setTimeout(() => {
    cakeText.setAttribute("visible", false);
  }, 12000);
});

// EXIT LOGIC
const interactedObjects = new Set();

function checkAllInteracted() {
  if (interactedObjects.size === 4) {
    const infoFrame = document.querySelector("#infoFrame");
    const exitDoor = document.querySelector("#exitDoor");

    infoFrame.setAttribute("visible", false);
    exitDoor.setAttribute("visible", true);
    exitDoor.classList.add("clickable");
  }
}

mirror.addEventListener("click", () => {
  interactedObjects.add("mirror");
  checkAllInteracted();
});

clock.addEventListener("click", () => {
  interactedObjects.add("clock");
  checkAllInteracted();
});

potion.addEventListener("click", () => {
  interactedObjects.add("potion");
  checkAllInteracted();
});

cake.addEventListener("click", () => {
  interactedObjects.add("cake");
  checkAllInteracted();
});

// EXIT DOOR — fade and redirect
const exitDoor = document.querySelector("#exitDoor");
exitDoor.addEventListener("click", () => {
  const fadeOverlay = document.getElementById("fadeOverlay");
  fadeOverlay.style.opacity = "1";

  setTimeout(() => {
    window.location.replace("index.html");
  }, 1500);
});
