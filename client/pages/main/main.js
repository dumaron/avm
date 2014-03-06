Session.set('mainFilterName', '');

Template.yogiList.yogi = function() {
	var filter = { subType: Session.get('mainFilterType') };
	var name = Session.get('mainFilterName');
	if (name) filter.name = {$regex: name, $options: 'i'};
	return Yogis.find(filter, {sort:{lessons: 1, name: 1}});
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
		Session.set('mainFilterName', text);
	}
});

Template.yogiList.subIs = function(type) {
	return (type == Session.get('mainFilterType'));
};