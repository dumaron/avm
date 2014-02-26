Template.modalAddYogi.events({
	'click .btn-primary': function(event) {
		event.preventDefault();
		console.log('invio');
		var modal = $('#addYogi');
		var name = modal.find('#newYogiName')[0].value;
		var lessons = parseInt(modal.find('#newYogiLessons')[0].value);
		Yogis.insert({
			name: name,
			lessons: lessons,
			owner: Meteor.userId(),
			insertOn : new Date()
		}, function(err) {
			if (err) alert('C\'è stato un errore nell\'inserimento. Mandami una mail che ne parliamo :)');
			else modal.modal('hide');
		});
	}
});