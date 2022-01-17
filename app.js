const play = document.getElementById('play');
const stop = document.getElementById('stop')
const screen = document.getElementById('video');
const video = document.getElementById('video');
const progress = document.getElementById('progress');
const timesstamp = document.getElementById('timesstamp')
// play.addEventListener('click',function(){
//    video.play();
// })
function toggleVideo(){
    if(video.paused){
        video.play();
        play.innerHTML ='<i class="fa fa-pause fa-2x"></i>'

    }else{
        video.pause();
        play.innerHTML ='<i class="fa fa-play fa-2x"></i>';
    }
   
}

function playVideoAgain(){
    video.pause();
    video.currentTime = 0;
    play.innerHTML ='<i class="fa fa-play fa-2x"></i>';
}
function updateProgress(){
    progress.value = (video.currentTime / video.duration)*100;
    // console.log(progress.value)
    // get minutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10){
     mins = '0' + String(mins);
    }
    // get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
    secs = '0' + String(secs)
}
    timesstamp.innerHTML = `${mins}:${secs}`
}

function videoProgress(){
    video.currentTime = (+progress.value * video.duration)/ 100;
}

// events
video.addEventListener('click',toggleVideo);
play.addEventListener('click',toggleVideo);   
stop.addEventListener('click',playVideoAgain);
video.addEventListener('timeupdate',updateProgress);
progress.addEventListener('change',videoProgress);