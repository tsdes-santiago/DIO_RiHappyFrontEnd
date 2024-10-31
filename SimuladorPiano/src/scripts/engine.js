const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mappedKeys = [];

let audio = new Audio("./src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => {
        playTune(key.dataset.key);
    });
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
        if (mappedKeys.includes(event.key.toLowerCase())) {
            playTune(event.key);
        }
});

volumeSlider.addEventListener("input", (event) => {
    audio.volume = event.target.value;
});

keysCheck.addEventListener("click", () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle("hide");
    });
});
