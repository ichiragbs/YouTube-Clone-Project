
function getQueryParams() {
    let params = new URLSearchParams(window.location.search);
    return {
        video: params.get("video"),
        title: params.get("title"),
        channel: params.get("channel"),
        profile: params.get("profile")
    };
}

function updateVideoPage() {
    const { video, title, channel, profile } = getQueryParams();

    if (video) {
        let videoElement = document.querySelector(".video");
        let sourceElement = videoElement.querySelector("source");
        
        sourceElement.src = video;
        videoElement.load();
        
        console.log("Video source updated to:", video);
    }

    if (title) document.querySelector(".videotitle2 .title").textContent = title;
    if (channel) document.querySelector(".channelname2").textContent = channel;
    if (profile) document.querySelector(".channeldp img").src = profile;
}

window.onload = updateVideoPage;
