const video = document.querySelector("video");
const button = document.querySelector("button");
let pause = false;



function mediaPlayer(config) {
    this.media = config.el;
};
mediaPlayer.prototype.play = function () {
    this.media.play();
}


function mediaStop(config) {
    this.media = config.el;
};

mediaStop.prototype.pause = function () {
    this.media.pause();
}

const player = new mediaPlayer({ el: video});
const stop = new mediaStop({ el: video});

button.onclick = () => {
    if (pause) {
        pause = false;
        stop.pause();
    } else {
        pause = true;
        player.play();
    }
}