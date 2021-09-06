import AutoPlay from './plugins/AutoPlay.js';
import MediaPlayer from './mediaPlayer.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()] });

const button = document.querySelector('button')
button.onclick = () => player.togglePlay();
