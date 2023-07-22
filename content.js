console.log('Script loaded.');

function checkVideo() {
    let video = document.querySelector('video');
    console.log('Checking for video element...', video);
    if (video) {
        monitorVideoEnd(video);
    } else {
        setTimeout(checkVideo, 1000);
    }
}

function monitorVideoEnd(video) {
    let checkInterval = setInterval(function() {
        if (video.currentTime >= video.duration - 0.5) {
            console.log('Video ended.');

            let buttons = document.querySelectorAll(".yt-spec-button-shape-next");
            let nextButton = buttons[buttons.length - 1]
            console.log("Next button:", nextButton);

            if (nextButton) {
                nextButton.click();
                console.log('Next button clicked.');
                clearInterval(checkInterval);
            }
        }
    }, 1000);
}

checkVideo();
