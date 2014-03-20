Template.modalAddMonth.rendered = function() {
	var modal = $('#modalAddMonth');
	modal.find('.datepicker').datetimepicker(
		{format: 'dd/mm/yyyy',
			weekStart:1,
			minView: 2,
			todayBtn: true,
			autoclose: true,
			pickerPosition: 'bottom-left'
		});
	modal.find('.startsFrom').val(moment().format('DD/MM/YYYY'));
};

Template.modalAddMonth.events({
	'click .btn-primary': function() {
		var modal = $('#modalAddMonth');
		var startsFrom = moment(modal.find('.startsFrom').val(), 'DD/MM/YYYY').format('YYYY-MM-DD');
		var id = Router.current().params.id;
		Yogis.update({_id:id}, {$set :{startSub: startsFrom}}, function(err) {
			if (err) alert('C\'è stato un errore:', err.toString());
			else modal.modal('hide');
		});

	}
});