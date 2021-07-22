// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerStateChange(event) {
  if (event.data === 1) {
    document.getElementById('player').style.opacity = '1';
  }
}

function onYouTubeIframeAPIReady() {
  const randomTime = Math.floor(3261 * Math.random());
  const player = new YT.Player('player', {
    height: '115%',
    width: '102%',
    videoId: '4kd6ES-TaoU',
    playerVars: {
      playlist: '4kd6ES-TaoU',
      start: randomTime,
      mute: 1,
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      autohide: 1,
      enablejsapi: 1,
      modestbranding: 1,
    },
    events: {
      onStateChange: onPlayerStateChange
    }
  });
}
