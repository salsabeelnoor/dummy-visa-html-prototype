
const video = document.getElementById('videoElement');
const duration = 5; // The duration to play before reversing (in seconds)
let playForward = true;

video.currentTime = 0;
video.play();

video.addEventListener('timeupdate', function() {
    if (playForward && video.currentTime >= duration) {
        playForward = false;
        reverseVideo();
    } else if (!playForward && video.currentTime <= 0) {
        playForward = true;
        video.currentTime = 0;
        video.play();
    }
});

function reverseVideo() {
    // video.pause();
    let reverseInterval = setInterval(() => {
        if (video.currentTime <= 0) {
            clearInterval(reverseInterval);
            playForward = true;
            video.currentTime = 0;
            video.play();
        } else {
            video.currentTime -= 0.5; // Adjust this value to change the reverse speed
        }
    }, 100); // This interval should match the reverse speed
}
