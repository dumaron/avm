Template.modalChangeToMonthly.rendered = function() {
	var modal = $('#modalChangeToMonthly');
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

Template.modalChangeToMonthly.events({
	'click .btn-primary': function() {
		var id = Router.current().params.id;
		var modal = $('#modalChangeToMonthly');
		var startsFrom = moment(modal.find('.startsFrom').val(), 'DD/MM/YYYY').format('YYYY-MM-DD');
		Yogis.update({_id:id}, {$set: {subType: 'monthly', startSub: startsFrom}}, function(err) {
			if (err) alert('Errore imprevisto, mandami una mail che ne parliamo');
			else modal.modal('hide');
		});
	}
});