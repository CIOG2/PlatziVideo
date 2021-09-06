import AutoPlay from './plugins/AutoPlay.js';
import MediaPlayer from './mediaPlayer.js';

const video = document.querySelector('video');
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()] });

const PlayButton = document.getElementById('playButton')
const MuteButton = document.getElementById('muteButton')

PlayButton.onclick = () => player.togglePlay();
MuteButton.onclick = () => player.toggleSound(player);