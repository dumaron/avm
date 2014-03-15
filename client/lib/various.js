sidebarFilter = function(text, list) {
	if (text == '' || !text)
		list.css('display','show');
	else {
		list.filter(function(idx, elem){
			return $(elem).find('a').html().toLowerCase().indexOf(text) == -1;
		}).css('display', 'none');
		list.filter(function(idx, elem){
			return $(elem).find('a').html().toLowerCase().indexOf(text) != -1;
		}).css('display', 'show');
	}
};