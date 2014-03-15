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
	'click .archive': function() {
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$set: {disabled: true}}, function(err){
			if (err) alert('Errore:', err.toString());
		});
	},
	'click .activate': function() {
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$set: {disabled: false}}, function(err){
			if (err) alert('Errore:', err.toString());
		});
	}
});