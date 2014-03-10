Session.set('mainFilterName', '');

Template.yogiList.yogi = function() {
	var filter = { subType: Session.get('mainFilterType') };
	var name = Session.get('mainFilterName');
	if (name) filter.name = {$regex: name, $options: 'i'};
	return Yogis.find(filter, {sort:{lessons: 1, startSub: 1, name: 1}});
};

Template.yogiList.getColorSingle = function(lessons) {
	if (lessons <= 0) return 'important';
	else if (lessons < 3) return 'warning';
	return '';
};

Template.yogiList.getColorMonthly = function(startSub) {
	if (moment(startSub, 'YYYY-MM-DD').add('month',1).isBefore())
		return 'important';
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

Template.yogiList.formatDate = function(startSub) {
	return moment(startSub, 'YYYY-MM-DD').format('DD/MM/YYYY');
};