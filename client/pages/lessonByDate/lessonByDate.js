Template.lessonByDate.findYogiName = function(data) {
	return Yogis.findOne(data).name;
};