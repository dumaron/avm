Template.lessonByDate.findYogiName = function(data) {
	return Yogis.findOne(data).name;
};

Template.lessonByDate.humanForm = function(date) {
	return moment(date,'YYYY-MM-DD').format('DD/MM/YYYY');
};