Template.yogisSidebar.yogi = function() {
	return Yogis.find({}, {sort: {name:1}});
};

Template.yogisSidebar.rendered = function() {
	var text = Session.get('yogisSidebarText');
	var sidebar = $('#yogisSidebar');
	sidebar.find('input').val(text);
	sidebarFilter(text, sidebar.find('li'));
};

Template.yogisSidebar.events({
	'keyup input': function(event) {
		var text = event.target.value.toLocaleLowerCase();
		var voices = $('#yogisSidebar').find('li');
		Session.set('yogisSidebarText', text);
		sidebarFilter(text, voices);
	}
});