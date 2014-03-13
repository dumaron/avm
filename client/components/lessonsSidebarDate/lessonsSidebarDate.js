Template.lessonsSidebarDate.lesson = function() {
	return Lessons.find({}, {sort:{date:-1}});
};

Template.lessonsSidebarDate.humanForm = function(date) {
	return moment(date,'YYYY-MM-DD').format('DD/MM/YYYY');
};