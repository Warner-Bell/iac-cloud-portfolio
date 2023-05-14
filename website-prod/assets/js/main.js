/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

 function blink(elem, times, speed) {
    if (times > 0 || times < 0) {
        if ($(elem).hasClass("blink")) 
            $(elem).removeClass("blink");
        else
            $(elem).addClass("blink");
    }

    clearTimeout(function () {
        blink(elem, times, speed);
    });

    if (times > 0 || times < 0) {
        setTimeout(function () {
            blink(elem, times, speed);
        }, speed);
        times -= .5;
    }
}

$(document).ready(function () {
  blink(".front-light", -1, 900);
  
    blink(".engage-4", -1, 650);//far right
    blink(".engage-5", -1, 650);//far left
blink(".engage-2", -1, 700); //center left
  blink(".engage-3", -1, 700); //center right
  
  blink(".se-1", -1, 675);
      blink(".se-2", -1,675);// right right
   blink(".se-3", -1, 675);//right left
   blink(".se-4", -1, 675); //left left

});



const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// site-visits js
const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    const response = await fetch("https://d6i2pee77rzpce3yb6ly7moygq0vckfh.lambda-url.us-east-1.on.aws/");
    const data = await response.json();
    counter.innerHTML = `Views = ${data} ✌🏽`;
  } catch (error) {
    console.error(error);
  }
}
updateCounter();