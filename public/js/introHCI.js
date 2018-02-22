'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//var like = $(".likeBtn");
	$(".likeBtn").click(function(){
		ga('send', 'event', 'like', 'click');			
		//console.log("hi");
	});	
}


