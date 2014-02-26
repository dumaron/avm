Meteor.subscribe('yogis');
Meteor.subscribe('lessons');

Router.map(function () {
	this.route('login', {
		before: alreadyLogged
	});
	this.route('main', {
		path: '/',
		before: checkLogin
	});
	this.route('addLesson', {
		before: checkLogin
	});
	this.route('yogi', {
		path: '/yogi/:id',
		before: checkLogin,
		data: function() { return Yogis.findOne(this.params.id); }
	});
	this.route('lessonsByDate',{
		before: checkLogin,
		path: '/lessons/date'
	});
	this.route('lessonByDate',{
		before: checkLogin,
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