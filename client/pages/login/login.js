Template.login.events({
	'submit form': function(e, t) {
		e.preventDefault();
		var username = t.find('input[type="text"]').value,
			password = t.find('input[type="password"]').value;
		Meteor.loginWithPassword(username, password, function(err) {
			if (err)
				alert(err.message);
			else
				Router.go('/');
		});
		return false;
	}
});