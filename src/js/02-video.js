import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
let SECOND_KEY = "videoplayer-current-time";
window.addEventListener('load', onLoad);
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle( function({seconds}) {
        localStorage.setItem(SECOND_KEY, seconds)
    }, 1000));

function onLoad(){
    try {
        const data = localStorage.getItem(SECOND_KEY)
        if (!data) return;
        player.setCurrentTime(data)
    } catch (error) {
        console.log(error.message)
    }
}
