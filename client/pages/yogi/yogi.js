Template.yogiDetail.formatDate = function(date) {
	return moment(date).format('DD/MM/YYYY');
};

Template.yogiDetail.getLastLesson = function(id) {
	return moment(Lessons.findOne({presents: {$in: [id]}}, {sort: {date:1}}).date, 'YYYY-MM-DD').format('DD/MM/YYYY');
};

Template.yogiDetail.numLessons = function(id) {
	return Lessons.find({presents: {$in: [id]}}).count();
};

Template.yogiDetail.hasLesson = function(id) {
	return Lessons.findOne({presents: {$in: [id]}}) ? true : false;
};

Template.yogiDetail.subIs = function(type) {
	var user = Yogis.findOne(Router.current().params.id);
	return type == user.subType;
};

Template.yogiDetail.events({
	'click .addLessons': function() {
		var user = Yogis.findOne(Router.current().params.id);
		console.log(user.subType);
		if (user.subType == 'single') {
			console.log('mih');
		} else {
			console.log('mah');
		}
	}
});