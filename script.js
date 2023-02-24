const video =  document.getElementById('video');
const play =  document.getElementById('play');
const stop =  document.getElementById('stop');
const progress =  document.getElementById('progress');
const timestamp =  document.getElementById('timestamp');


//Play and pause video
function toggleVideoStatus () {
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
}

//video play and pause icon
function updatePlayIcon () {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//update progress and timestamp
function updateProgress () {
    progress.value = (video.currentTime / video.duration) * 100;

    //minutes
    let mins = Math.floor(video.currentTime / 60)
    if(mins < 10) {
        mins = '0' + String(mins)
    }

    //second
    let secs = Math.floor(video.currentTime % 60)
    if(secs < 10) {
        secs = '0' + String(secs)
    }

    timestamp.innerHTML = `${mins} : ${secs}`
}

//set video time to progress
function setVideoProgress () {
    video.currentTime = (+progress.value * video.duration) /100 ;
}

//stop video
function stopVideo () {
    video.currentTime  = 0;
    video.pause()
}

//Event Listeners
video.addEventListener("click", toggleVideoStatus)
play.addEventListener('click', toggleVideoStatus);

video.addEventListener("pause", updatePlayIcon)
video.addEventListener("play", updatePlayIcon)

video.addEventListener("timeupdate", updateProgress)


stop.addEventListener('click', stopVideo)

progress.addEventListener("change", setVideoProgress)

