Session.set('mainFilter', {});

Template.yogiList.yogi = function() {
	return Yogis.find(Session.get('mainFilter'), {sort:{lessons: 1, name: 1}});
};

Template.yogiList.getColor = function(lessons) {
	if (lessons <= 0) return 'important';
	else if (lessons < 3) return 'warning';
	return '';
};

Template.main.events({
	'keyup input.filter': function() {
		var text = $('#main').find('input.filter')[0].value;
		text = text.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		Session.set('mainFilter', {name: {$regex: text, $options: 'i'}});
	}
});