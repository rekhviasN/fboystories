var Q = require('q');
var Story = require('./storyModel.js');

var getAllStories = Q.nbind(Story.find, Story);
var createStory = Q.nbind(Story.create, Story);

module.exports = {

	allStories: function(req,res,next){
		getAllStories({})
		  .then(function(stories){
		  	res.json(stories)
		  })
		  .fail(function(error){
		  	next(error);
		  });
	},

	postTo: function(req, res){
		var newStory;

		if(req.body.story){
			newStory = {
				story: req.body.story,
				upVotes: 0,
				location: "nyc"
			};
		}
		console.log("newstory: " , newStory)
		 createStory(newStory);
			res.send("good job!");
		}
		
		
};
