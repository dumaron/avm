Template.modalUpdateYogi.events({
	'click .btn-primary': function() {
		var modal = $('#modalUpdateYogi');
		var name = modal.find('input').val();
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$set: {name: name}}, function(err) {
			if (err) {
				alert('Errore nella modifica, mandami una mail che ne parliamo');
				Logger.log('Errore nel cambiare il nome all\'iscritto con id '+id);
			}
			else {
				modal.modal('hide');
				Logger.log('Modificato l\'iscritto con id '+id+' cambiando il nome con '+name);
			}
		});
	}
});