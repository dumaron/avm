Template.modalAddLessons.events({
	'click .btn-primary': function() {
		var modal = $('#modalAddLessons');
		var numLessons = parseInt(modal.find('.numLessons').val());
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$inc: {lessons: numLessons}}, function(err) {
			if (err) {
				alert('C\'è stato un errore:', err.toString());
				Logger.log('Errore nell\'aggiunta lezione singola:' + err.toString());
			}
			else {
				modal.modal('hide');
				Logger.log('Aggiunta di '+numLessons+' lezioni all\'utente con id '+id);
			}
		});
	}
});