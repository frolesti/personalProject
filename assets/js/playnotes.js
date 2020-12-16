const keys = document.querySelectorAll(".key");
const pianos = document.querySelectorAll(".piano");

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key))
    });

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
}
