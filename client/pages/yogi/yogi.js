Template.yogiDetail.formatDate = function(date) {
	return moment(date).format('DD/MM/YYYY');
};

Template.yogiDetail.getLastLesson = function(id) {
	return moment(Lessons.findOne({presents: {$in: [id]}}, {sort: {date:1}}).date, 'YYYY-MM-DD').format('DD/MM/YYYY');
};

Template.yogiDetail.numLessons = function(id) {
	return Lessons.find({presents: {$in: [id]}}).count();
};

Template.yogiDetail.hasLesson = function(id) {
	return Lessons.findOne({presents: {$in: [id]}}) ? true : false;
};

Template.yogiDetail.subIs = function(type) {
	var user = Yogis.findOne(Router.current().params.id);
	return type == user.subType;
};

Template.yogiDetail.events({
	'click .archive': function() {
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$set: {disabled: true}}, function(err){
			if (err) alert('Errore:', err.toString());
		});
	},
	'click .activate': function() {
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$set: {disabled: false}}, function(err){
			if (err) alert('Errore:', err.toString());
		});
	}
});

Template.yogiDetail.rendered = function() {
	var lessons = Lessons.find({}, {sort:{date:-1}, limit: 100}).fetch(), yogiId = Router.current().params.id;
	var perRow = 10,width = 600, height = 400, gridSize = Math.floor(width / perRow);
	var hcount= 0, vcount=0;
	var svg = d3.select("#chart").append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g");

	var heatMap = svg.selectAll(".date")
		.data(lessons)
		.enter().append("rect")
		.attr("x", function(d) { return hcount++ * gridSize; })
		.attr("y", function(d) { return Math.floor(vcount++ / perRow) * gridSize; })
		.attr("rx", 4)
		.attr("ry", 4)
		.attr("class", "lesson")
		.attr("width", gridSize -2)
		.attr("height", gridSize -2)
		.style("fill", function(d) {
			return d.presents.indexOf(yogiId) == -1 ? '#efefef' : '#CFF09E';
		});

	heatMap.append("title").text(function(d) {
		return moment(d.date, 'YYYY-MM-DD').format('DD/MM/YYYY');
	});

};