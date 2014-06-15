Template.modalAddYogi.rendered = function() {
	var modal = $('#modalAddYogi');
	modal.find('.datepicker').datetimepicker(
		{format: 'yyyy-mm-dd',
			weekStart:1,
			minView: 2,
			todayBtn: true,
			autoclose: true,
			pickerPosition: 'bottom-left'
		});
	modal.find('.mensile').hide();
	modal.find('.newYogiStartSubscription').val(moment().format('YYYY-MM-DD'));
};

Template.modalAddYogi.events({
	'click .btn-primary': function(event) {
		event.preventDefault();
		var modal = $('#modalAddYogi');
		var name = modal.find('#newYogiName').val();
		var type = modal.find('#newYogiType').val();
		var lessons = parseInt(modal.find('.newYogiLessons').val());
		var startSubscription = modal.find('.newYogiStartSubscription').val();
		if (!name) {
			alert('Prima di poter inserire un utente devi specificare il suo nome!');
			return false;
		} else {
			var yogi = {
				name: name,
				owner: Meteor.userId(),
				insertOn : new Date()
			};
			switch(type) {
				case 'singolo': yogi.lessons = lessons; yogi.subType= 'single';break;
				case 'mensile': yogi.startSub = startSubscription; yogi.subType= 'monthly'; break;
			}
			Yogis.insert(yogi, function(err, id) {
				if (err) {
					alert('C\'è stato un errore nell\'inserimento. Mandami una mail che ne parliamo :)');
					Logger.log('Errore nell\'inserimento di un nuovo iscritto');
				}
				else {
					modal.modal('hide');
					Logger.log('Inserito l\'iscritto con id '+id);
				}
			});
		}
	},
	'change select': function(event) {
		var modal = $('#modalAddYogi');
		var type = $(event.target).val();
		switch (type) {
			case 'mensile':
				modal.find('.mensile').show();
				modal.find('.singolo').hide();
				break;
			case 'singolo':
				modal.find('.singolo').show();
				modal.find('.mensile').hide();
				break;
		}
	}
});