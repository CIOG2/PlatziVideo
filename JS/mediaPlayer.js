// ******************  Index.js

// import MediaPlayer from './mediaPlayer.js';
// import MediaPlayer from './plugins/AutoPlay.js';

    const video = document.querySelector('video');
    const player = new MediaPlayer({el: video, plugins: [
        new AutoPlay 
    ],});

    const button = document.querySelector('button')
    button.onclick = () => player.togglePlay();


// ******************

function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
};

MediaPlayer.prototype.play = function () {
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
    if(this.media.paused){
        this.play();
    } else {
        this.pause();
    }
};


// export default MediaPlayer;