var audio = new Audio("songs/3.mp3")


// play bottom button 
let play = document.getElementById("play");
play.addEventListener("click", () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        play.classList.toggle("fa-circle-play");
        play.classList.toggle("fa-circle-pause");
        gif.style.opacity = 1;

    }
    else {
        audio.pause();
        play.classList.toggle("fa-circle-play");
        play.classList.toggle("fa-circle-pause");
        gif.style.opacity = 0;
    }
})

// range
let range = document.getElementById("bar");
audio.addEventListener("timeupdate", () => {
    range.value = parseInt((audio.currentTime / audio.duration) * 200)
})




// change song through small play 
let sm = document.querySelectorAll(".sm");
for (let i = 0; i < sm.length; i++) {
    const element = sm[i];
    element.addEventListener("click", () => {
        if (audio.paused || audio.currentTime <= 0) {
            audio.src = "songs/" + (i + 1) + ".mp3"
            audio.play();
            element.classList.remove("fa-circle-play");
            element.classList.add("fa-circle-pause");
        }
        else {
            audio.pause();
            element.classList.add("fa-circle-play");
            element.classList.remove("fa-circle-pause");
        }
    })
}



// change song through range
range.addEventListener("change", () => {
    audio.currentTime = (range.value * audio.duration) / 200;
})






// next or pre

// next 
let index = 0;
document.getElementById("next").addEventListener("click", function () {
    if (index >= 9) {
        index = 0;
    }
    else {
        index += 1;
    }

    audio.src = "songs/" + index + ".mp3";
    audio.play();
})

// pre
let pre_index = 0;
document.getElementById("pre").addEventListener("click", () => {
    if (pre_index <= 0) {
        pre_index = 9;
    }
    else {
        pre_index -= 1;
    }
    audio.src = "songs/" + pre_index + ".mp3"
    audio.play();
})