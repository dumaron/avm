Template.lessonByDate.findYogiName = function(data) {
	return Yogis.findOne(data).name;
};

Template.lessonByDate.humanForm = function(date) {
	return moment(date,'YYYY-MM-DD').format('DD/MM/YYYY');
};


Template.lessonByDate.events({
	'click .remove': function(evt) {
		var answer = confirm('Vuoi veramente rimuovere questo utente dalla lezione?');
		if (answer) {
			var yogiId = evt.target.parentNode.parentNode.id.replace('yogi-','');
			var yogi = Yogis.findOne(yogiId);
			var lessonId = Router.current().params.id;
			Lessons.update(lessonId, {$pull: {presents:yogiId}});
			if (yogi.subType == 'single') {
				Yogis.update(yogiId, {$inc: {lessons:1}});
			}
		}
	}
});