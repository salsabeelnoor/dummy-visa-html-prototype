var vid = document.getElementById("vid");
    vid.addEventListener("timeupdate", function () {
        if(this.currentTime >= 21.0) {
            this.currentTime = 0.0;
        }
    });