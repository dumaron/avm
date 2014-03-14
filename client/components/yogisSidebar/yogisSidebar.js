Template.yogisSidebar.yogi = function() {
	return Yogis.find({}, {sort: {name:1}});
};

Template.yogisSidebar.events({
	'keyup input': function(event) {
		var text = event.srcElement.value.toLocaleLowerCase();
		var voices = $('#yogisSidebar').find('li');
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