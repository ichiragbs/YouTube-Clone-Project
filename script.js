
function updateVideoPage() {
    const { video, title, channel, profile } = getQueryParams();

    if (video) {
        let videoElement = document.querySelector(".video");
        videoElement.src = video; // Set video src directly
        videoElement.load();
    }
    
    if (title) document.querySelector(".videotitle2 .title").textContent = title;
    if (channel) document.querySelector(".channelname2").textContent = channel;
    if (profile) document.querySelector(".channeldp img").src = profile;
}

window.onload = updateVideoPage;
