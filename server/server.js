for (var i=0; i<AllowedUsers.length; i++) {
	var user = Meteor.users.findOne({username: AllowedUsers[i].username});
	if (!user) {
		Accounts.createUser(AllowedUsers[i]);
		Meteor.users.update({username:AllowedUsers[i].username},
			{$set : {'emails.0.verified': true}});
	}
}

Meteor.publish('yogis', function () {
	return Yogis.find({
		owner: this.userId
	});
});

Meteor.publish('lessons', function () {
	return Lessons.find({
		owner: this.userId
	});
});

Meteor.publish('log', function () {
	return Log.find({
		owner: this.userId,
		insertedOn: {$gt: moment().add('years',1).toDate()}
	});
});