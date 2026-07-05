const modal = document.getElementById("videoModal");
const video = document.getElementById("demoVideo");
const source = video.querySelector("source");
const closeBtn = document.querySelector(".close");

function openVideo(videoPath) {
    source.src = videoPath;
    video.load();
    modal.style.display = "block";
}

closeBtn.onclick = function () {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    }
}