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


//slide in first portfolio project and animate the latest work bar
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


//slide in second portfolio section
var secondPortfolioSlideInScene = new ScrollMagic.Scene({
	triggerElement: '#triggerSecondPortfolioAnim',
	triggerHook: 1
}).addTo(controller)
.addIndicators();

secondPortfolioSlideInScene.on("enter", function() {
	$(".clear-view-image").addClass("animate-fade-and-move");
	$(".clear-view-info").addClass("animate-fade-and-move");
});

secondPortfolioSlideInScene.on("leave", function() {
	$(".clear-view-image").removeClass("animate-fade-and-move");
	$(".clear-view-info").removeClass("animate-fade-and-move");
});

//slide in third portfolio section
var thirdPortfolioSlideInScene = new ScrollMagic.Scene({
	triggerElement: '#triggerThirdPortfolioAnim',
	triggerHook: 1
}).addTo(controller)
.addIndicators();

thirdPortfolioSlideInScene.on("enter", function() {
	$(".drift-racer-image").addClass("animate-fade-and-move");
	$(".drift-racer-app-info").addClass("animate-fade-and-move");
});

thirdPortfolioSlideInScene.on("leave", function() {
	$(".drift-racer-image").removeClass("animate-fade-and-move");
	$(".drift-racer-app-info").removeClass("animate-fade-and-move");
});

//scene for removing bg color class for about section - fades to black
//also fades out third portfolio section
var aboutSectionScene = new ScrollMagic.Scene({
	triggerElement: '.about-section',
	triggerHook: 1,
	offset: -600
}).addTo(controller)
.addIndicators();

aboutSectionScene.on("enter", function() {
	$("body").removeClass("animate-bg-color");
	$("#triggerThirdPortfolioAnim").addClass("animate-opacity");
});

aboutSectionScene.on("leave", function() {
	$("body").addClass("animate-bg-color");
	$("#triggerThirdPortfolioAnim").removeClass("animate-opacity");
});


//animate contact bar
var animateContactBarScene = new ScrollMagic.Scene({
	triggerElement: '.contact-section',
	triggerHook: 1
	
}).addTo(controller)
.addIndicators();

animateContactBarScene.on("enter", function() {
	$(".contact-section__bar").addClass("animate-bar");
});

animateContactBarScene.on("leave", function() {
	$(".contact-section__bar").removeClass("animate-bar");
});


//handle learn more button click
$(".portfolio-project__learn-more-button").on("click", function() {
	
	$(this).find("i").toggleClass("rotate-chevron");
	//get reference to learn more container
	var nearestContainerToAnimate = $(this).next();
	var learnMoreText = $(nearestContainerToAnimate).find(">:first-child");
	// console.log(learnMoreText);
	
	if(!$(nearestContainerToAnimate).hasClass("closed")) {
		//to close
		// $(nearestContainerToAnimate).css("display", "none");
		TweenLite.to(nearestContainerToAnimate, 0.2, 
			{
			scaleY: 0, 
			scaleX: 0.7,
			onComplete: function() {
				$(nearestContainerToAnimate).css("display", "none");
			}
			});
		TweenLite.to(learnMoreText, 0.05, {opacity: 0});
		$(nearestContainerToAnimate).addClass("closed");
	} else {
		//to open
		$(nearestContainerToAnimate).css("display", "block");
		TweenLite.to(nearestContainerToAnimate, 0.2, {scaleY: 1, scaleX: 1});
		TweenLite.to(learnMoreText, .8, {opacity: 1});

		$(nearestContainerToAnimate).removeClass("closed");
	}

});


//contact form
$("#contact").submit(function (event) {
	console.log("meow");
	event.preventDefault();
	var name = $("#mail-name").val();
	var email = $("#mail-email").val();
	var message = $("#mail-message").val();
	var submit = $("#mail-submit").val();

	$(".form-message").load("mail.php", {
		name: name,
		email: email,
		message: message,
		submit: submit

	});
});





