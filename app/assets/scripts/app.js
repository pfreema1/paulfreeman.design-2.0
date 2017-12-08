//init ScrollMagic
var controller = new ScrollMagic.Controller();

//split intro text
var mySplitText = new SplitText("#text-wrapper", {
	type: "chars",
	charsClass: "char++",
	position: "absolute"
});







var timeline1 = new TimelineLite();

timeline1.to($(".char1"), 5, {
	y: -300,
	opacity: 0,
	ease: Power1.easeInOut
})
.to($(".char5"), 4, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char8"), 3, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char15"), 7, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0);



var timeline2 = new TimelineLite();

timeline2.to($(".char4"), 5, {
	y: -300,
	opacity: 0,
	ease: Power1.easeInOut
})
.to($(".char9"), 4, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char12"), 3, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char16"), 7, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0);

var timeline3 = new TimelineLite();

timeline3.to($(".char3"), 5, {
	y: -300,
	opacity: 0,
	ease: Power1.easeInOut
})
.to($(".char7"), 4, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char11"), 3, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char14"), 7, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0);

var timeline4 = new TimelineLite();

timeline4.to($(".char2"), 5, {
	y: -300,
	opacity: 0,
	ease: Power1.easeInOut
})
.to($(".char6"), 4, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char10"), 3, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char13"), 7, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0)
.to($(".char17"), 7, {
	y: -500,
	opacity: 0,
	ease: Power1.easeInOut
}, 0);







//create scroll magic scene and add to controller
var myScene1 = new ScrollMagic.Scene({
	duration: '50%',
	triggerElement: '.trigger1',
	triggerHook: 1     //0 = top, 1 = bottom
}).addTo(controller);
//add indicators
// myScene1.addIndicators({
// 	colorStart: 'yellow',
// 	colorTrigger: 'yellow'
// });
//add tween to scrollmagic
myScene1.setTween(timeline1);


var myScene2 = new ScrollMagic.Scene({
	duration: '50%',
	triggerElement: '.trigger2',
	triggerHook: 1     //0 = top, 1 = bottom
}).addTo(controller);
//add indicators
// myScene2.addIndicators({
// 	colorStart: 'yellow',
// 	colorTrigger: 'yellow'
// });
//add tween to scrollmagic
myScene2.setTween(timeline2);


var myScene3 = new ScrollMagic.Scene({
	duration: '50%',
	triggerElement: '.trigger3',
	triggerHook: 1     //0 = top, 1 = bottom
}).addTo(controller);
//add indicators
// myScene3.addIndicators({
// 	colorStart: 'yellow',
// 	colorTrigger: 'yellow'
// });
//add tween to scrollmagic
myScene3.setTween(timeline3);

var myScene4 = new ScrollMagic.Scene({
	duration: '50%',
	triggerElement: '.trigger4',
	triggerHook: 1     //0 = top, 1 = bottom
}).addTo(controller);
//add indicators
// myScene4.addIndicators({
// 	colorStart: 'yellow',
// 	colorTrigger: 'yellow'
// });
//add tween to scrollmagic
myScene4.setTween(timeline4);

var myBackgroundColorChangeScene = new ScrollMagic.Scene({
	triggerElement: '.trigger4',
	triggerHook: 1
})
.addTo(controller)
.setClassToggle("body", "animate-bg-color");

var myLatestWorkBarScene = new ScrollMagic.Scene({
	triggerElement: '#triggerLatestWorkBar',
	triggerHook: 1
}).addTo(controller)
.addIndicators();

myLatestWorkBarScene.on("enter", function() {
	$(".latest-work-bar").addClass("animate-bar");
	$(".climbing-app-image").addClass("animate-fade-and-move");
	$(".climbing-wall-app-info").addClass("animate-fade-and-move");
});

myLatestWorkBarScene.on("leave", function() {
	$(".latest-work-bar").removeClass("animate-bar");
	$(".climbing-app-image").removeClass("animate-fade-and-move");
	$(".climbing-wall-app-info").removeClass("animate-fade-and-move");
});



//handle learn more button click
$(".portfolio-project__learn-more-button").on("click", function() {
	
	$(this).find("i").toggleClass("rotate-chevron");

});






//really good gsap toggle explanation: https://codepen.io/osublake/pen/wKLmzK

//reference to all learn more buttons
var learnMoreButtons = $(".portfolio-project__learn-more-button");
//create animation for each element
var animations = learnMoreButtons.map(createAnimation);


function createAnimation(i, element) {
	var tween = TweenLite.to(element, 1, {
		backgroundColor: "blue"
	}).reverse();

	//return a function to toggle the reversed state
	return function(target) {
		var reversed = element !== target ? true: !tween.reversed();
		tween.reversed(reversed);
	}

}

function playAnimation(event) {
	//cycle through list of animations, toggling reversed state
	animations.each(function(i, animate) {
		animate(event.target);
	});
}


console.log(animations[0]);
