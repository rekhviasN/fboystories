var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
	story: { type: String},
	upVotes: Number, 
	createdDate:  { type: Date, default: Date.now },
	location: { type: String}
}); 

module.exports = mongoose.model('Story', StorySchema);