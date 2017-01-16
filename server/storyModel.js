var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
	story: { type: String, required: true },
	upVotes: Number, 
	createdDate: { type: Date },
	location: { type: String, required: true }
}); 

module.exports = mongoose.model('Story', StorySchema);