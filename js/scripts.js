
'use strict';																			// Use Javascript strict mode

window.onload = function() {

	// Initialise Enabler
	if (Enabler.isInitialized()) {														// If Enabler has loaded
		enablerReady();																	// Call 'enablerReady'
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerReady);			// Otherwise, initalise Enabler, then call 'enablerReady'
	}

	// Polite load
	function enablerReady() {
		if (Enabler.isPageLoaded()) {													// If page is loaded
			showAd();																	// Call 'showAd'
		} else {
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);	// Otherwise, wait until page has loaded, then call 'showAd'
		}
	};

	// Runs when the page is completely loaded.
	function showAd(){
		anim();																			// Call ad animation
	};
}

// anim
function anim() {
	console.log('IT WORKS!');
}