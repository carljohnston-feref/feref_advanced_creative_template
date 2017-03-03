
'use strict';																			// Use Javascript strict mode

window.onload = function() {

	// Initialise Enabler
	if (Enabler.isInitialized()) {														// If Enabler has loaded
		enablerReady();																	// Call 'enablerReady'
	}
	else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerReady);			// Otherwise, initalise Enabler, then call 'enablerReady'
	}

	// Polite load
	function enablerReady() {
		if (Enabler.isPageLoaded()) {													// If page is loaded
			showAd();																	// Call 'showAd'
		}
		else {
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);	// Otherwise, wait until page has loaded, then call 'showAd'
		}
	};

	// Runs when the page is completely loaded.
	function showAd(){
		anim();																			// Call ad animation
	};
}

var tl = new TimelineMax({repeat:0});													// Declare new timeline object
var dur = 0.25;																			// Animation time base

// anim
function anim() {

	tl.play();																			// Play timeline
	
	// Frame 1 
	tl.to('#frame1', dur*5, { autoAlpha:1, ease:RoughEase.ease.config({ template:Power0.easeNone, strength:1, points:20, taper:"none", randomize:true, clamp:false}) })			// Show '#frame1'
	  .from('#frame1Logo', dur, { delay:dur, x:200, ease:Power2.easeIn })																										// Animate in '#frame1Logo' from left
	  .to('#frame1', dur, { delay:1, autoAlpha:0 })																																// Hide '#frame1'
	;

	// Frame 2
	tl.to('#frame2', dur, { autoAlpha:1 })												// Show '#frame2'
	  .to('#frame2Logo', dur, { delay:2, x:-970, ease:Power2.easeIn })					// Animate '#frame2Logo' off canvas to left
	  .set('#ctaExit', { autoAlpha:1 })													// Show '#ctaExit'
	  .from('#ctaExit', 1, { delay:1, y:-250, ease:Bounce.easeOut });					// Animate in '#ctaExit' from top
	;
}