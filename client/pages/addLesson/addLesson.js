var presents, guests;

Template.presents.rendered = function() {
	presents = [];
	Session.set('guests', []);
	$('.datepicker').datetimepicker(
		{format: 'yyyy-mm-dd',
			weekStart:1,
			minView: 2,
			todayBtn: true,
			autoclose: true,
			pickerPosition: 'bottom-left'
		});
};

Template.presents.yogi = function() {
	return Yogis.find({}, {sort:{name: 1}});
};

Template.guests.guest =  function() {
	return Session.get('guests');
};

Template.presents.events({
	'click .yogi, ': function(evt) {
		var elem = $(evt.srcElement),
			effect = 'label-important';

		if (!elem.hasClass(effect)) {
			elem.addClass(effect);
			presents.push(elem.attr('id'));
		}
		else {
			elem.removeClass(effect);
			presents = _.difference(presents, [elem.attr('id')]);
		}
		$('#numPresents').html(presents.length);
	},
	'click .btn-primary': function(evt) {
		evt.preventDefault();
		var guests = Session.get('guests'),
			date = $('#newLessonDate').val(),
			cost = $('#cost').val();

		if (presents.length == 0) {
			alert('Una lezione con zero presenti? Controlla meglio :)');
			return false;
		}
		if (date == '') {
			alert('Per poter inserire una lezione devi inserire la data!');
			return false;
		}
		// creo l'oggetto corrispondente alla lezione
		for (var i=0; i<guests.length; i++)
			guests[i] = guests[i].name;
		var lesson = {
			owner: Meteor.userId(),
			presents: presents,
			date: date,
			cost: cost
		};
		if (guests.length != 0)
			lesson.guests = guests;

		Lessons.insert(lesson);
	}
});

Template.guests.events({
	'click button, submit form': function(evt) {
		evt.preventDefault();
		var input =$('#guestName')[0],
			guests = Session.get('guests');
		if (input.value != '') {
			guests.push({ name:input.value });
			Session.set('guests', guests);
			input.value = '';
		} else {
			alert('Prima devi mettere un nome nella casella di testo!');
		}
	},
	'click .icon-remove': function(evt) {
		evt.preventDefault();
		var guest = $(evt.srcElement).attr('data-refer'),
			guests = Session.get('guests');
		for(var i=0; i<guests.length; i++) {
			if (guests[i].name == guest)
			  guests.splice(i, 1);
		}
		Session.set('guests', guests);
	}
});

