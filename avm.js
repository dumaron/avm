Yogis = new Meteor.Collection('yogis');
Lessons = new Meteor.Collection('lessons');
Log = new Meteor.Collection('log');

Yogis.allow({
	insert: function(userId) {
		return (userId) ? true : false;
	},
	update: function(userId, yogi) {
		return yogi.owner == userId;
	},
	remove: function(userId, yogi) {
		return yogi.owner == userId;
	}
});

Lessons.allow({
	insert: function(userId) {
		return (userId) ? true : false;
	},
	update: function(userId, lesson) {
		return lesson.owner == userId;
	},
	remove: function(userId, lesson) {
		return lesson.owner == userId;
	}
});