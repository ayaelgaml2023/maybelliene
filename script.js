
	<script>
        <div id="moving-text">May be she's born with it
        May be it's Maybelline</div>
		var text = document.getElementById("moving-text");
		var position = 0;
		var interval = setInterval(moveText, 10);

		function moveText() {
			position += 1;
			text.style.left = position + "px";
			if (position >= 500) {
				clearInterval(interval);
				setTimeout(function() {
					text.style.left = "0px";
					position = 0;
					interval = setInterval(moveText, 10);
				}, 1000);
			}
		}
	</script>