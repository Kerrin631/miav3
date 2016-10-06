var AppRouter = Backbone.Router.extend({
	routes: {
		"home": "viewHome",
		'proceduresMenu': 'viewProceduresMenu',
		'about': 'viewAboutPage',
		"*other": "viewHome"
	},
	viewHome: function(){
		var removeProceduresMenu = function() {
			var window_size = $(window).height();
			console.log(window_size)
			TweenMax.staggerTo("#m1", 0.5, {rotation:0, y:-window_size * 2}, 0.5);
			TweenMax.staggerTo("#m2", 0.5, {rotation:0, y:window_size * 2}, 0.5);
			TweenMax.staggerTo("#m3", 0.5, {rotation:0, y:-window_size * 2}, 0.5);
			TweenMax.staggerTo("#m4", 0.5, {rotation:0, y:window_size * 2}, 0.5);
			TweenMax.staggerTo("#m5", 0.5, {rotation:0, y:-window_size * 2}, 0.5);
			var clearDiv = function(){
				$(document.getElementById('proceduresMenu')).remove()
			}
			setTimeout(clearDiv, 500)

		}
		$(document.getElementById('container')).empty()
		// $(document.getElementById('proceduresMenu')).remove()
		// if('#proceduresMenu') {
		removeProceduresMenu()
		renderHomeDivs()
		// renderVideoBackground();
		// renderClientFunc()
		renderHomeNav()
	},

	viewProceduresMenu: function(){
		// $(document.getElementById('container')).empty()
		renderProceduresMenuDivs()
		// startAffects()
		// $(document.getElementById('container')).empty()
		// console.log('should be empty')
	},

	viewAboutPage: function(){
		console.log('about clicked')
	},

	// viewAway: function(){
	// 	$(document.getElementById('container')).empty()
	// 	renderPatientFunc()
	// }
});

var router = new AppRouter();
Backbone.history.start({});

var NavView = Backbone.View.extend({
	events: {
		"click": "onClick"
	},
	onClick: function(e){
		var navButton = $(e.target);
		router.navigate(navButton.attr("data-url"), { trigger: true });
	}
})

// var navView = new NavView({ el: '#nav' })

var navView = new NavView({ el: '.nav' })

