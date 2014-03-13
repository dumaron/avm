Template.yogisSidebar.yogi = function() {
	return Yogis.find({}, {sort: {name:1}});
};