Logger = {};
Logger.log = function(text) {
	Log.insert({
		owner: Meteor.userId(),
		insertedOn: new Date(),
		text: text
	});
};