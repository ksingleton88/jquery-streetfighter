$(document).ready(function(){

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	$('.ryu').mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})

	.mousedown(function() {
		//play hadouken sound
		// var v = document.getElementsByTagName('audio')[0];
		// v.play(0); v.volume[.5];
		
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'}, 
			500,
			function() {
				$(this).hide();
				$(this).css('left', '628px');
			}
		);
		//animate hadouken to the right of the screen

	})

	.mouseup(function() {
		//ryu goes back to his ready position
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();

	})

});

function playHadouken(){
		$('.hadouken-sound')[0].volume = 0.5;
		$('.hadouken-sound')[0].load();
		$('.hadouken-sound')[0].play();
};

$(document).on("keydown", function(e){
   var code = e.keyCode;
    if(code == 88){
     $('.ryu-ready').hide();
     $('.ryu-cool').show(); 
    }
});

$(document).on("keyup", function(e){
	var code = e.keyCode;
	if(code==88){
		$('.ryu-cool').hide();
		$('.ryu-ready').show();
	}
});




