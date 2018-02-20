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


// Trying scripts for full-screen Vimeo
function videoSize() {
  var $windowHeight = $(window).height();
  var $videoHeight = $(".video").outerHeight();
	var $scale = $windowHeight / $videoHeight;

  if ($videoHeight <= $windowHeight) {
    $(".video").css({
      "-webkit-transform" : "scale("+$scale+") translateY(-50%)",
			"transform" : "scale("+$scale+") translateY(-50%)"
		});
	};
}

$(window).on('load resize',function(){
  videoSize();
});
