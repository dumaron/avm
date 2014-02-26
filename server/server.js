for (var i=0; i<AllowedUsers.length; i++) {
	var user = Meteor.users.findOne({username: AllowedUsers[i].username});
	if (!user) {
		Accounts.createUser(AllowedUsers[i]);
		Meteor.users.update({username:AllowedUsers[i].username},
			{$set : {'emails.0.verified': true}});
	}
}