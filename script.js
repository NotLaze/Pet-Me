let mood = "Happy";
const moodEl = document.getElementById("mood");
const petEl = document.getElementById("pet");

function updateMood(newMood) {
  mood = newMood;
  moodEl.textContent = `Mood: ${mood}`;
}

function feedPet() {
  updateMood("Full and Happy 😋");
  petEl.style.animation = "shake 0.3s";
  setTimeout(() => petEl.style.animation = "", 300);
}

function petPet() {
  updateMood("Loved 🥰");
  petEl.style.transform = "scale(1.1)";
  setTimeout(() => petEl.style.transform = "scale(1)", 300);
}

function sleepPet() {
  updateMood("Sleeping... 😴");
  petEl.style.filter = "brightness(0.4)";
  setTimeout(() => {
    petEl.style.filter = "brightness(1)";
    updateMood("Rested 😌");
  }, 3000);
}
