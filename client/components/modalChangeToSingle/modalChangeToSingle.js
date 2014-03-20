Template.modalChangeToSingle.events({
	'click .btn-primary': function() {
		var id = Router.current().params.id;
		var modal = $('#modalChangeToSingle');
		var numLessons = modal.find('select').val();
		console.log(numLessons);
		Yogis.update({_id:id}, {$set: {subType: 'single', lessons: parseInt(numLessons)}}, function(err) {
			if (err) alert('Errore imprevisto, mandami una mail che ne parliamo');
			else modal.modal('hide');
		});
	}
});