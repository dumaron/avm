Template.lessonsSidebarDate.lesson = function() {
	return Lessons.find({}, {sort:{date:-1}});
};

Template.lessonsSidebarDate.humanForm = function(date) {
	return moment(date,'YYYY-MM-DD').format('DD/MM/YYYY');
};

Template.lessonsSidebarDate.events({
	'keyup input': function(event) {
		var text = event.srcElement.value.toLocaleLowerCase();
		var voices = $('#lessonsDateSidebar').find('li');
		if (text == '')
			voices.css('display','show');
		else {
			voices.filter(function(idx, elem){
				return $(elem).find('a').html().toLowerCase().indexOf(text) == -1;
			}).css('display', 'none');
			voices.filter(function(idx, elem){
				return $(elem).find('a').html().toLowerCase().indexOf(text) != -1;
			}).css('display', 'show');
		}
	}
});