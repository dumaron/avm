Meteor.subscribe('yogis');
Meteor.subscribe('lessons');
Meteor.subscribe('log');

Router.map(function () {
	this.route('login', {
		onBeforeAction: alreadyLogged
	});
	this.route('main', {
		path: '/',
		action: function() { this.redirect('/show/single');	}
	});
	this.route('showYogi', {
		path: '/show/:type',
		onBeforeAction: [
			checkLogin,
			function() {
				Session.set('mainFilterType', this.params.type);
				Session.set('mainFilterName', '');
			}
		],
		template: 'main',
		data: function() {
			return {
				type: this.params.type
			};
		}
	});
	this.route('addLesson', {
		onBeforeAction: checkLogin
	});
	this.route('yogi', {
		path: '/yogi/:id',
		onBeforeAction: checkLogin,
		data: function() { return Yogis.findOne(this.params.id); }
	});
	this.route('yogis', {
		path: '/yogi',
		onBeforeAction: checkLogin
	});
	this.route('lessonsByDate',{
		onBeforeAction: checkLogin,
		path: '/lessons/date'
	});
	this.route('lessonByDate',{
		onBeforeAction: checkLogin,
		path: '/lessons/date/:id',
		data: function() { return Lessons.findOne(this.params.id); }
	});
});

function checkLogin() {
	if (!Meteor.userId()) {
		Router.go('/login');
		this.stop();
	}
}

function alreadyLogged() {
	if (Meteor.userId()) {
		Router.go('/');
		this.stop();
	}
}