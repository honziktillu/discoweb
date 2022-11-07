const color = document.getElementById('color');
const start = document.getElementById('start');
const video = document.getElementById('videoElement');
const colors = ['green', 'red', 'purple', 'yellow'];

const media = new Audio("./res/media/song.mp3");

const startUwauwa = () => {
    start.style.display = "none";
    color.style.display = "block";
    media.loop = true;
    media.play();
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            changeColor();
        })
        .catch((err) => {
          console.log("Something went wrong!");
          console.log(err);
        });
    }
}

const changeColor = () => {
    let cP = 0;
    setInterval(() => {
        color.classList.remove(...color.classList);
        color.classList.add(colors[cP]);
        cP++;
        if (cP === colors.length - 1) cP = 0;
    }, 150);
}

window.onload = () => {
    start.addEventListener('click', startUwauwa);
}