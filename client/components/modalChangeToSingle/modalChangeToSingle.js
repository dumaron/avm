Template.modalChangeToSingle.events({
	'click .btn-primary': function() {
		var id = Router.current().params.id;
		var modal = $('#modalChangeToSingle');
		var numLessons = modal.find('select').val();
		console.log(numLessons);
		Yogis.update({_id:id}, {$set: {subType: 'single', lessons: parseInt(numLessons)}}, function(err) {
			if (err) {
				alert('Errore imprevisto, mandami una mail che ne parliamo');
				Logger.log('Errore nel passaggio ad abbonamento singolo dell\'iscritto con id '+id);
			}
			else {
				modal.modal('hide');
				Logger.log('Passaggio dell\'iscritto con id '+id+' ad abbonamento singolo');
			}
		});
	}
});