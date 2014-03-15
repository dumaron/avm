Template.lessonsSidebarDate.lesson = function() {
	return Lessons.find({}, {sort:{date:-1}});
};

Template.lessonsSidebarDate.humanForm = function(date) {
	return moment(date,'YYYY-MM-DD').format('DD/MM/YYYY');
};

Template.lessonsSidebarDate.rendered = function() {
	var text = Session.get('lessonsDateSidebarText');
	var sidebar = $('#lessonsDateSidebar');
	sidebar.find('input').val(text);
	sidebarFilter(text, sidebar.find('li'));
};

Template.lessonsSidebarDate.events({
	'keyup input': function(event) {
		var text = event.srcElement.value.toLocaleLowerCase();
		var voices = $('#lessonsDateSidebar').find('li');
		Session.set('lessonsDateSidebarText', text);
		sidebarFilter(text, voices);
	}
});