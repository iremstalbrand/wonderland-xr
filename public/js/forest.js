window.addEventListener("click", async () => {
  const forestAudio = document.querySelector("#forestAudio");

  const sceneEl = document.querySelector("a-scene");

  if (sceneEl?.audioListener?.context?.state === "suspended") {
    await sceneEl.audioListener.context.resume();
  }

  forestAudio.components.sound.playSound();
}, { once: true });