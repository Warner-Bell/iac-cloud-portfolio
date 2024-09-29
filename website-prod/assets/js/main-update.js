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

// Blink function
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

// Document ready for blinking elements
$(document).ready(function () {
    blink(".front-light", -1, 900);
    blink(".engage-4", -1, 650);
    blink(".engage-5", -1, 650);
    blink(".engage-2", -1, 700);
    blink(".engage-3", -1, 700);
    blink(".se-1", -1, 675);
    blink(".se-2", -1, 675);
    blink(".se-3", -1, 675);
    blink(".se-4", -1, 675);
});

// Marquee handling
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// Site visits counter
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        const response = await fetch("https://xjieaidaaocbryn7b2vmo63ir40nahpy.lambda-url.us-east-1.on.aws/");
        const data = await response.json();
        counter.innerHTML = `<b>Visits</b> = ${data} ✌🏽`;
    } catch (error) {
        console.error(error);
    }
}
updateCounter();

// Adjusting certification scroll speed on page load
document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.certifications-list');
    const speed = 50; // Scroll speed in seconds
    scroller.style.animationDuration = `${speed}s`;
});
