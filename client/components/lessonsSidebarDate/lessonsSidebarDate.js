Template.lessonsSidebarDate.lesson = function() {
	return Lessons.find({}, {sort:{date:-1}});
};