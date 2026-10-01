const video = document.getElementById('player');

video.addEventListener('loadedmetadata', () => {
  video.currentTime = Math.random() * video.duration;
}, { once: true });

video.addEventListener('playing', () => {
  video.style.opacity = '1';
}, { once: true });

video.src = 'https://archive.org/download/ytdown-you-tube-old-winamp-visualization-geiss-v-2-no-mus-media-4kd-6-es-tao-u-003-360p/YTDown_YouTube_Old-Winamp-Visualization-Geiss-v2-no-mus_Media_4kd6ES-TaoU_003_360p.mp4';
