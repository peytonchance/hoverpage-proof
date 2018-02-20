var video = document.getElementById('myVideo');
var source = document.createElement('source');
var newUrl;

source.setAttribute('src', 'img/default.mp4');
video.appendChild(source);
video.play();

// Get the button
var btn = document.getElementById("myBtn");

// Switch video background to match hovered button
function switchVideo(newUrl){
  source.setAttribute('src', newUrl);
  video.load();
  video.play();
}
// Reset video back
function resetVideo(){
  source.setAttribute('src', 'img/default.mp4');
  video.load();
  video.play();
}
